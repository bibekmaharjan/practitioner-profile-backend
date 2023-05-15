import dotenv from 'dotenv';

dotenv.config();

const config = {
  db: {
    /* Password needed to save in env or use vault. Exposed only for now */
    host: 'db4free.net',
    user: 'practitioneruser',
    password: process.env.DB_PASSWORD,
    database: 'practitioner',
  },
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default config;
