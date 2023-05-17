import { getPractitioner } from '../controller/practitioner';
import corsMiddleware from '../middleware/corsMiddleware';

export default (app) => {
  app.use(corsMiddleware);

  app.get('/practitioners', getPractitioner);
};
