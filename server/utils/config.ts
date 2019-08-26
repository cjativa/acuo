import * as dotenv from 'dotenv';

// Set up the config
dotenv.config();

export const Config = {
    surveyMonkeyUrl: process.env.SURVEY_MONKEY_API_URL,
    surveyMonkeyAccessToken: process.env.SURVEY_MONKEY_ACCESS_TOKEN,

    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,

    port: process.env.PORT
}