import { knex } from '../knex';
import { tables as t } from '../tables';

export class SurveyDatabaseService {

    async createSurvey(id: string, title: string, href: string) {

        try {
            const rows = await knex
                .from(t.surveys)
                .where({ id });

            if (rows.length == 0) {
                await knex
                    .from(t.surveys)
                    .insert({ id, title, href });
            }

            else {
                await knex
                .from(t.surveys)
                .update({ id, title, href })
                .where({ id });
            }
        }

        catch (error) {
            console.log(`Could not insert survey id ${id} in Surveys table`, error);
        }
    }

    async createQuestions(id: string, family: string, survey_id: string) {

        try {
            const rows = await knex
                .from(t.questions)
                .where({ id });

            if (rows.length == 0) {
                await knex
                    .from(t.questions)
                    .insert({ id, family, survey_id });
            }

            else {
                await knex
                .from(t.questions)
                .update({ id, family, survey_id })
                .where({ id });
            }
        }

        catch (error) {
            console.log(`Could not insert question id ${id} in Questions table`, error);
        }
    }

    async createChoices(id: string, text: string, question_id: string) {

        try {
            const rows = await knex
                .from(t.choices)
                .where({ id });

            if (rows.length == 0) {
                await knex
                    .from(t.choices)
                    .insert({ id, text, question_id });
            }

            else {
                await knex
                .from(t.choices)
                .update({ id, text, question_id })
                .where({ id });
            }
        }

        catch (error) {
            console.log(`Could not insert choice id ${id} in Choices table`, error);
        }
    }
}