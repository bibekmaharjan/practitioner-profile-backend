import HttpStatus from 'http-status-codes';

import db from '../models';
import cloudinary from '../services/cloudinary';
import { handleErrorResponse } from '../misc/errorHandling';

const Practitioner = db.practitioner;

/**
 * Get list of practitioner
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getPractitioner = async (req, res) => {
  try {
    const practitioners = await Practitioner.findAll();

    res.send(practitioners);
  } catch (err) {
    handleErrorResponse(res, err);
  }
};

/**
 * Add practitioner to practitioner list.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const addPractitioner = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = result.secure_url;

    const createdPractitioner = await Practitioner.create({
      ...req.body,
      userImg: imageUrl
    });

    res.send(createdPractitioner);
    res.status(HttpStatus.CREATED).send(createdPractitioner);
  } catch (err) {
    handleErrorResponse(res, err);
  }
};
