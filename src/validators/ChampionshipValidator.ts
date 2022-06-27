import { Validator } from "./ClassValidator";
import Joi from "joi";

const championshipSchema = {
    name: Joi.string().max(100).required(),
    description: Joi.string().max(500).required(),
    levels: Joi.number().min(1).integer().required(),
    award: Joi.number().required()
}

class ChampionshipValidator extends Validator {
    static validate(data: any) {
        return this.validateSchema(
            {
                name: championshipSchema.name.required(),
                description: championshipSchema.description.required(),
                levels: championshipSchema.levels.required(),
                award: championshipSchema.award.required()
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
                name: championshipSchema.name.optional(),
                description: championshipSchema.description.optional(),
                levels: championshipSchema.levels.optional(),
                award: championshipSchema.award.optional()
            },
            data
        );
    }
}

export { ChampionshipValidator }