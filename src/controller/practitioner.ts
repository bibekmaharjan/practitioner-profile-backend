import HttpStatus from 'http-status-codes';

import db from '../models';
import cloudinary from '../services/cloudinary';
import { HttpError, handleErrorResponse } from '../misc/errorHandling';

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

    res.status(HttpStatus.CREATED).send(createdPractitioner);
  } catch (err) {
    handleErrorResponse(res, err);
  }
};

/**
 * Update practitioner of practitioner list.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const updatePractitioner = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const userImg = result.secure_url;

    const { id } = req.params;

    // update the practitioner record
    const [numUpdated, updatedPractitioner] = await Practitioner.update(
      {
       ...req.body,
       userImg
      },
      { where: { id } }
    );

    if (numUpdated) {
      const user = await Practitioner.findByPk(id);
      res.status(HttpStatus.CREATED).send(user);
    } else {
      throw new HttpError('Practitioner not found.', 400);
    }
  } catch (err) {
    handleErrorResponse(res, err);
  }
};
