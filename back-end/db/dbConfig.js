//DEPENDECIES
const pgp = require("pg-promise")();


//CONFIGURATION
require("dotenv").config();
const { 
  DATABASE_URL, 
  PG_HOST, 
  PG_PORT, 
  PG_DATABASE, 
  PG_USER, 
  PG_PASSWORD } = process.env;


//Connection Object
const cn = DATABASE_URL
  ? {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE,
    user: PG_USER
      // connectionString: DATABASE_URL,
      // max: 30,
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER
    };


//Creating Instance of PG_Promise And Passing CO to PG_Promise
const db = pgp(cn);


//EXPORTS
module.exports = db;
