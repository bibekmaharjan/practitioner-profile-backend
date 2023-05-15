import * as Joi from 'joi';

/**
 * Validates the given schema.
 *
 * @param {object} data
 * @param {object} schema
 * @returns {Promise<object>}
 */
export function validate(data: object, schema: object): Promise<object> {
  return new Promise((resolve, reject) => {
    console.log(data);
    const options = { abortEarly: false };

    const joiSchema = Joi.isSchema(schema) ? schema : Joi.object(schema);

    const { error, value } = joiSchema.validate(data, options);

    if (error) {
      console.error('Validation error: ', error);
      reject(error);

      return;
    }

    resolve(value);
  });
}
