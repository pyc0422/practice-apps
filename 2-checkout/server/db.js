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
        email VARCHAR (100) NOT NULL,
        password VARCHAR(400) NOT NULL,
        line VARCHAR (400) NOT NULL,
        city VARCHAR(40) NOT NULL,
        state VARCHAR(100) NOT NULL,
        zip VARCHAR(20) NOT NULL,
        phone VARCHAR(200) NOT NULL,
        creditCard VARCHAR(400) NOT NULL,
        expired VARCHAR (20) NOT NULL,
        cvv INT NOT NULL,
        billing_zip VARCHAR(10) NOT NULL,
        s_id VARCHAR (400) NOT NULL
        )`
    )
  )
  .catch((err) => console.log('database: ',err));


module.exports = db;
