import * as smService from './api/services/surveyMonkeyService';
import { SurveysPayload } from './api/interfaces/surveyMonkeyPayloads';


async function main() {

    // Parse and pull in the surveys list
    parseSurveys();

    // Pull in responses for each survey in the database
}

async function parseSurveys() {

    // Pull in list of surveys
    const surveys = await smService.retrieveSurveys();
    const { data } = surveys;

    // Iterate through each survey payload
    for (let i = 0; i < data.length; i++) {

        const survey = data[i];
        const { title, id, href } = survey;

        await parseSurveyDetails(id);
    }
}

async function parseSurveyDetails(id: string) {

    // Get the survey details
    const surveyDetails = await smService.retrieveSurveyDetails(id);

    // Each survey will likely only have 1 page (since they'll typically be 5 or less questions)
    const { questions } = surveyDetails.pages[0];

    // For each question
    questions.forEach((question) => {

        const { id, family } = question;

        // Iterate answer choices
        question.answers.choices.forEach((choice) => {

            const { text, id } = choice;

        });
    });
}

main();
