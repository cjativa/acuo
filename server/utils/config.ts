import dotenv from 'dotenv';

// Set up the config
dotenv.config();

export const Config = {
    surveyMonkeyUrl: process.env.SURVEY_MONKEY_API_URL,
    surveyMonkeyAccessToken: process.env.SURVEY_MONKEY_ACCESS_TOKEN
}