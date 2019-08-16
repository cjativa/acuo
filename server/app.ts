import * as smService from './api/services/surveyMonkeyService';
import { SurveyDatabaseService } from './database/services/survey';
import { SurveyData } from './api/interfaces/surveyMonkeyPayloads';


class SurveyProcessor {

    private sds: SurveyDatabaseService;

    constructor() {
        this.sds = new SurveyDatabaseService();
    }

    async main(survey: SurveyData) {

        // Get survey information and write to database
        const { title, id, href } = survey;
        await this.sds.createSurvey(id, title, href);

        await this.parseSurveyDetails(id);
    }

    async parseSurveyDetails(surveyId: string) {

        // Get the survey details
        const surveyDetails = await smService.retrieveSurveyDetails(surveyId);

        // Each survey will likely only have 1 page (since they'll typically be 5 or less questions)
        const { questions } = surveyDetails.pages[0];

        for (let i = 0; i < questions.length; i++) {

            const question = questions[i];

            // Get question information and write to database
            const { id, family } = question;
            await this.sds.createQuestions(id, family, surveyId);

            // Iterate answer choices
            for (let j = 0; j < question.answers.choices.length; j++) {

                const choice = question.answers.choices[j];

                // Get choice information and write to database
                const { text, id: choiceId } = choice;
                await this.sds.createChoices(choiceId, text, id);
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
