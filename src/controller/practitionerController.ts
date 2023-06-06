import HttpStatus from 'http-status-codes';

import db from '../models';
import cloudinary from '../services/cloudinary';
import { HttpError, handleErrorResponse } from '../misc/errorHandling';

const Practitioner = db.practitioner;

/**
 * Get list of practitioner.
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
 * Update practitioner from practitioner list.
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
      throw new HttpError('Practitioner not found.', 404);
    }
  } catch (err) {
    handleErrorResponse(res, err);
  }
};

/**
 * Delete practitioner record by given id.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const deletePractitioner = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the practitioner record
    const numDeleted = await Practitioner.destroy({ where: { id } });

    if (numDeleted) {
      res.status({ message: 'Practitioner deleted successfully' });
    } else {
      throw new HttpError('Practitioner not found.', 404);
    }
  } catch (err) {
    handleErrorResponse(res, err);
  }
};

/**
 * Get details of practitioner.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getPractitionerDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Practitioner.findByPk(id);
    res.send(response);
  } catch (err) {
    handleErrorResponse(res, err);
  }
};
