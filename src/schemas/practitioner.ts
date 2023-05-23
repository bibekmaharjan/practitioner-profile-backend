import * as Joi from 'joi';

export default Joi.object({
  id: Joi.number().integer(),
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  contact: Joi.string().required(),
  dob: Joi.date().required(),
  workingDays: Joi.number().required(),
  startTime: Joi.date().required(),
  endTime: Joi.date().required(),
  address: Joi.string().optional(),
  city: Joi.string().optional(),
  gender: Joi.string().optional(),
  zipcode: Joi.number().optional(),
  status: Joi.string().optional(),
  isICUSpecialist: Joi.boolean().required(),
  userImg: Joi.object(),
  allergies: Joi.string().optional(),
});
