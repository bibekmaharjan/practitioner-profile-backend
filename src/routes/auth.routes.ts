import userAuth from '../schemas/userAuth';
import verifySignUp from '../middleware/verifySignup';
import { schema } from '../middleware/validateSchema';
import { signin, signup } from '../controller/authController';

export default (app) => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post('/auth/signup', schema(userAuth), [verifySignUp.checkDuplicateEmail], signup);

  app.post('/auth/signin', schema(userAuth), signin);
};
