import multer from 'multer';

import practitioner from '../schemas/practitioner';
import { schema } from '../middleware/validateSchema';
import verifyJwtToken from '../middleware/verifyJwtToken';
import {
  addPractitioner,
  deletePractitioner,
  getPractitioner,
  getPractitionerDetail,
  updatePractitioner,
} from '../controller/practitionerController';

const upload = multer({ dest: 'uploads/' });

export default (app) => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.get('/practitioners', verifyJwtToken, getPractitioner);

  app.post('/practitioners', [upload.single('userImg'), schema(practitioner), verifyJwtToken], addPractitioner);

  app.put('/practitioners/:id', [upload.single('userImg'), schema(practitioner), verifyJwtToken], updatePractitioner);

  app.delete('/practitioners/:id', verifyJwtToken, deletePractitioner);

  app.get('/practitioners/:id', verifyJwtToken, getPractitionerDetail);
};
