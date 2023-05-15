import db from '../models';

const User = db.user;

const checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: 'Sorry email already exists',
      });
      return;
    }

    next();
  });
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
};

export default verifySignUp;
