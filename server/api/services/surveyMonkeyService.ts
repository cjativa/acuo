import axios from 'axios';
import { SurveysPayload, SurveyDetailsPayload } from '../interfaces/surveyMonkeyPayloads';
import { SurveyMonkeyConfig } from '../../utils/axiosConfigs';

export async function retrieveSurveys(): Promise<SurveysPayload> {

    const url = 'surveys';
    const aConfig = new SurveyMonkeyConfig('get', url);

    try {
        const response = (await axios(aConfig)).data as SurveysPayload;
        return response;
    }

    catch (error) {
        console.log('An error occurred retrieving the list of surveys from SurveyMonkey', error);
    }
}

export async function retrieveSurveyDetails(id: string): Promise<SurveyDetailsPayload> {

    const url = `surveys/${id}/details`;
    const aConfig = new SurveyMonkeyConfig('get', url);

    try {
        const response = (await axios(aConfig)).data as SurveyDetailsPayload;
        return response;
    }

    catch (error) {
        console.log('An error occurred retrieving the list of surveys from SurveyMonkey', error);
    }
}

export async function retrieveSurveyResponse(id: string) {

    const url = `surveys/${id}/responses/bulk`;
    const aConfig = new SurveyMonkeyConfig('get', url);

    try {
        const response = (await axios(aConfig)).data as SurveyDetailsPayload;
        console.log(response);
    }

    catch (error) {
        console.log('An error occurred retrieving the list of surveys from SurveyMonkey', error);
    }
}