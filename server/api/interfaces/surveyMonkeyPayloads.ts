export interface SurveysPayload {
    per_page: number,
    total: number,
    data: {
        href: string,
        nickname: string,
        id: string,
        title: string
    }[],
    page: number
}

export interface SurveyDetailsPayload {
    response_count: number,
    date_created: string,
    nickname: string,
    id: string,
    question_count: number,
    pages: SurveyPage[]
    title: string
}

interface SurveyPage {
    questions: {
        family: string
        answers: { choices: { id: string, text: string }[] }
        headings: { heading: string }[],
        id: string
    }[],
    question_count: number
}

export interface SueveyResponsesPayload {
    per_page: number, 
    total: number, 
    data: SurveyResponse[]
    page: number
}

interface SurveyResponse {
    id: string,
    date_modified: string,
    response_status: string,
    pages: SurveyResponsePage[],
    date_created: string,
    survey_id: string,

}

interface SurveyResponsePage {
    
}