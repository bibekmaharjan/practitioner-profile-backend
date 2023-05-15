import { Request, NextFunction, Response } from "express";

import * as validator from '../utils/schemaValidator';

/**
 * Middleware to validate a schema against request body.
 *
 * @param {any} validationSchema The schema to validate against.
 * @returns {Middleware}
 */
 export function schema(validationSchema: any) {
    return function validateSchema(req: Request, res: Response, next: NextFunction) {
      return validator
        .validate(req.body, validationSchema)
        .then(() => next())
        .catch(err => next(err));
    };
  }
  