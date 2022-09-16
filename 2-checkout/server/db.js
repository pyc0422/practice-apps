const mysql = require("mysql2");
const Promise = require("bluebird");
//require("dotenv").config();
// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
});
console.log(process.env.DB_NAME);
const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))


  .then(() =>  db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`))
  .then(() => db.queryAsync(`USE ${process.env.DB_NAME}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (40) NOT NULL,
        email VARCHER (100) NOT NULL
        s_id VARCHAR (400) NOT NULL,
        line1 VARCHER (400) NOT NULL,
        line2 VARCHER (400),
        city VARCHER(40) NOT NULL,
        state VARCHER(100) NOT NULL,
        zip INT NOT NULL,
        phone INT NOT NULL,
        creditCard: VARCHER(400) NOT NULL,
        expire_month: INT,
        expire_year: INT,
        cvv: INT NOT NULL,
        billing_zip: INT NOT NULL
        )`
    )
  )
  .catch((err) => console.log('database: ',err));

module.exports = db;
