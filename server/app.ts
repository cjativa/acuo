import * as smService from './api/services/surveyMonkeyService';
import { SurveyDatabaseService } from './database/services/survey';
import { SurveyData } from './api/interfaces/surveyMonkeyPayloads';
import { UserDatabaseService } from './database/services/user';


class SurveyProcessor {

    private sds: SurveyDatabaseService;
    private uds: UserDatabaseService;

    constructor() {
        this.sds = new SurveyDatabaseService();
        this.uds = new UserDatabaseService();
    }

    async main(survey: SurveyData) {

        // Get survey information and write to database
        const { title, id, href } = survey;
        await this.sds.createSurvey(id, title, href);

        await this.parseSurveyDetails(id);

        const demoQuestion = await this.sds.getDemographicQuestion(id);
        await this.parseSurveyResponse(id, demoQuestion);
    }

    async parseSurveyDetails(surveyId: string) {

        // Get the survey details
        const surveyDetails = await smService.retrieveSurveyDetails(surveyId);

        // Each survey will likely only have 1 page (since they'll typically be 5 or less questions)
        const { questions } = surveyDetails.pages[0];

        for (let i = 0; i < questions.length; i++) {

            const question = questions[i];

            // Get question information and write to database
            const { id: questionId, family } = question;
            await this.sds.createQuestions(questionId, family, surveyId);

            // Store the location of the demographic question
            if (family === "demographic") {
                const { id: rowId } = question.answers.rows.find((row) => {
                    return row.type === "name";
                });

                await this.sds.createDemographicQuestion(surveyId, questionId, rowId);
            }

            // Iterate answer choices
            for (let j = 0; j < question.answers.choices.length; j++) {

                const choice = question.answers.choices[j];

                // Get choice information and write to database
                const { text, id: choiceId } = choice;
                await this.sds.createChoices(choiceId, text, questionId);
            }
        }
    }

    async parseSurveyResponse(surveyId: string, demoQuestion: { question_id: string, row_id: string }) {

        // Get the survey response payloads
        const responses = (await smService.retrieveSurveyResponse(surveyId)).data;

        for (let i = 0; i < responses.length; i++) {

            const response = responses[i];

            // Get response details and store it
            const { id: response_id, response_status, date_created, survey_id, pages } = response;
            await this.sds.createResponseDetails(response_id, response_status, date_created, surveyId);

            for (let j = 0; j < pages.length; j++) {

                const { questions } = pages[j];

                for (let k = 0; k < questions.length; k++) {

                    const question = questions[k];

                    const { id: question_id, answers } = question;

                    for (let l = 0; l < answers.length; l++) {

                        if (question_id === demoQuestion.question_id) {
                            const { text: username, row_id } = answers[l];

                            if (row_id === demoQuestion.row_id) {
                                const userId = await this.uds.getUserId(username);
                                await this.sds.updateResponseDetails(userId, response_id);
                            }
                        }

                        // Store response id, question id, and choice
                        else {
                            const { choice_id } = answers[l];
                            await this.sds.createResponses(response_id, question_id, choice_id);
                        }

                    }
                }
            }
        }
    }
}


async function run() {

    // Pull in list of surveys
    const surveys = (await smService.retrieveSurveys()).data;

    // Iterate through each survey payload
    for (let i = 0; i < surveys.length; i++) {

        const sp = new SurveyProcessor();
        const survey = surveys[i];

        sp.main(survey);
    }
}

run();
