import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/auth.config';
import { HOUR_IN_SEC } from '../constants/time';

import db from '../models';

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

/**
 * Initiate signin flow
 *
 * @param {Request} req
 * @param {Response} res
 */
export const signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    let token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: HOUR_IN_SEC, // 24 hours
    });

    res.status(200).send({
      id: user.id,
      email: user.email,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
