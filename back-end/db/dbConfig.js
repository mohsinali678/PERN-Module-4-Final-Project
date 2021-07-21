//DEPENDENCIES
const pgp = require("pg-promise")();

//CONFIGURATION
require("dotenv").config();
const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;

//Connection Object
const cn = DATABASE_URL
  ? {
<<<<<<< HEAD
      // host: PG_HOST,
      // port: PG_PORT,
      // database: PG_DATABASE,
      // user: PG_USER
=======
>>>>>>> 3ad9e94c2c117b6dbb219373cc6a52318c9cd303
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    };

//Creating Instance of PG_Promise And Passing CO to PG_Promise
const db = pgp(cn);

//EXPORTS
module.exports = db;
