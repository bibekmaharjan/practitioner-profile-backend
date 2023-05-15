import multer from 'multer';

import practitioner from '../schemas/practitioner';
import { schema } from '../middleware/validateSchema';
import { addPractitioner, deletePractitioner, getPractitioner, updatePractitioner } from '../controller/practitioner';

const upload = multer({ dest: 'uploads/' });

export default (app) => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.get('/practitioners', getPractitioner);

  app.post('/practitioners', [upload.single('userImg'), schema(practitioner)], addPractitioner);

  app.put('/practitioners/:id', [upload.single('userImg'), schema(practitioner)], updatePractitioner);

  app.delete('/practitioners/:id', deletePractitioner);
};
