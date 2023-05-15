import db from '../models';
import cloudinary from '../services/cloudinary';

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
    res.status(500).send({ message: err.message });
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
      fullName: req.body.fullName,
      email: req.body.email,
      contact: req.body.contact,
      dob: req.body.dob,
      workingDays: req.body.workingDays,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      address: req.body.address,
      city: req.body.city,
      gender: req.body.gender,
      zipcode: req.body.zipcode,
      status: req.body.status,
      isICUSpecialist: req.body.isICUSpecialist,
      userImg: imageUrl,
      allergies: req.body.allergies,
    });

    res.send(createdPractitioner);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
