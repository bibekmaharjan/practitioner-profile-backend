import db from '../models';

const User = db.user;

const checkDuplicateEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      })

      if(user) {
        return res.status(400).send({
                message: 'Sorry email already exists',
              });
      }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
};

export default verifySignUp;
