import { Validator } from "./ClassValidator";
import Joi from "joi";

class QueryValidator extends Validator {
    static validate(data: any) {
        return this.validateSchema(
            {
                name: Joi.string().max(100),
                page: Joi.number().integer().min(0).default(0),
                limit: Joi.number().integer().min(1).default(50),
            },
            data
        );
    }
}

export { QueryValidator }