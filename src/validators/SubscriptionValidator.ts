import { Validator } from "./ClassValidator";
import Joi from "joi";

class SubscriptionValidator extends Validator {
    static validate(data: any) {
        return this.validateSchema(
            {
                championshipId: Joi.string().uuid().required(),
                teamId: Joi.string().uuid().required()
            },
            data
        );
    }
}

export { SubscriptionValidator }