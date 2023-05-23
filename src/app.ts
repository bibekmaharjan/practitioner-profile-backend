import cors from 'cors';
import express from 'express';

import authRoutes from './routes/auth.routes';
import practitionerRoutes from './routes/practitioner.routes';

const app = express();
const port = 8080;
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

authRoutes(app);
practitionerRoutes(app);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
