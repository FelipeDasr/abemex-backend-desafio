import { Validator } from "./ClassValidator";
import Joi from "joi";

const teamSchema = {
    name: Joi.string().max(100),
    playersInitials: Joi.string().uppercase().min(3).max(3)
}

class TeamValidator extends Validator {
    static validate(data: any) {
        return this.validateSchema(
            {
                name: teamSchema.name.required(),
                playersInitials: teamSchema.playersInitials.required()
            },
            data
        );
    }

    static validateUpdate(data: any) {
        if (Object.keys(data).length === 0) {
            return { value: {}, error: "Must have at least one field" }
        }
        return this.validateSchema(
            {
                name: teamSchema.name.optional(),
                playersInitials: teamSchema.playersInitials.optional()
            },
            data
        );
    }
}

export { TeamValidator }