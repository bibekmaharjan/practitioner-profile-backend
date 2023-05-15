import * as Joi from 'joi';

export default {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};
