import db from '../models';
import bcrypt from 'bcryptjs';

const User = db.user;

/**
 * Initiate signup
 *
 * @param {Request} req
 * @param {Response} res
 */
export const signup = async (req, res) => {
  try {
    // Save User to Database
    await User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    res.send({ message: 'User was registered successfully!' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
