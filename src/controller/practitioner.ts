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

    const {
      fullName,
      email,
      contact,
      dob,
      workingDays,
      startTime,
      endTime,
      address,
      city,
      gender,
      zipcode,
      status,
      isICUSpecialist,
      allergies,
    } = req.body;

    // update the practitioner record
    const [numUpdated, updatedPractitioner] = await Practitioner.update(
      {
        fullName,
        email,
        contact,
        dob,
        workingDays,
        startTime,
        endTime,
        address,
        city,
        gender,
        zipcode,
        status,
        isICUSpecialist,
        userImg,
        allergies,
      },
      { where: { id } }
    );

    if (numUpdated === 1) {
      const user = await Practitioner.findByPk(id);
      res.send(user);
    } else {
      throw new Error('Practitioner not found');
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

/**
 * Delete practitioner record by given id
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
      res.status(404).json({ error: 'Practitioner not found.' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
