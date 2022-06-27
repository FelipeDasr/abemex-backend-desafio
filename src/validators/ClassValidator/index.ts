import Joi from 'joi';

class Validator {
    protected static validateSchema(schema: Joi.PartialSchemaMap<any>, data: any) {
        // Validation result
        const validation = Joi.object(schema).validate(data, {
            abortEarly: false,
            allowUnknown: false,
        });

        return {
            value: validation.value,
            error: validation.error?.details[0].message
        }
    }
}

export { Validator }