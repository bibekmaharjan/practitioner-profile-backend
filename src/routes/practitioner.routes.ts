import multer from 'multer';

import practitioner from '../schemas/practitioner';
import { schema } from '../middleware/validateSchema';
import corsMiddleware from '../middleware/corsMiddleware';
import { addPractitioner, deletePractitioner, getPractitioner, updatePractitioner } from '../controller/practitioner';

const upload = multer({ dest: 'uploads/' });

export default (app) => {
  app.use(corsMiddleware);

  app.get('/practitioners', getPractitioner);

  app.post('/practitioners', [upload.single('userImg'), schema(practitioner)], addPractitioner);

  app.put('/practitioners/:id', [upload.single('userImg'), schema(practitioner)], updatePractitioner);

  app.delete('/practitioners/:id', deletePractitioner);
};
