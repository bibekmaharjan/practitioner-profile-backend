import db from '../models';

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
