import userAuth from '../schemas/userAuth';
import verifySignUp from '../middleware/verifySignup';
import { schema } from '../middleware/validateSchema';
import corsMiddleware from '../middleware/corsMiddleware';
import { signin, signup } from '../controller/authController';

export default (app) => {
  app.use(corsMiddleware);

  app.post('/auth/signup', schema(userAuth), [verifySignUp.checkDuplicateEmail], signup);

  app.post('/auth/signin', schema(userAuth), signin);
};
