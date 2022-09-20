require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
//app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req, res) => {
  res.render('../../client/dist/index.html');
})

app.post('/form', sessionHandler, (req, res) => {
  if (req.message) {
    console.log('message: ', req.message);
    return res.json(req.message);
  }
  const data = req.body;
  data.s_id = req.session_id;
  let query = `INSERT INTO responses(name, email, password, line, city, state, zip, phone, creditCard, expired, cvv, billing_zip, s_id)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  let params = Object.values(data);
  console.log(params);
  db.query(query, params, (err) => {
    if (err){
      console.log(err);
    } else {
      res.status(201).send('OK');
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
