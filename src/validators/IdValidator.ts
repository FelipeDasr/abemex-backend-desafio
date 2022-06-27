import { Validator } from "./ClassValidator";
import Joi from "joi";

class IdValidator extends Validator {
    static validate(data: any) {
        return this.validateSchema(
            { id: Joi.string().uuid() },
            data
        );
    }
}

export { IdValidator }