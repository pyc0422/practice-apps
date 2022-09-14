require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;
const { preWords, findAll, save } = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/update', (req, res) => {
  console.log('req');
  return findAll()
    .then((data) => {
      console.log('data', data);
      res.status(200).json(data);
    })
})

app.post('/add', (req, res) => {
  const word = req.body;
  return save(word)
    .then((data) => {
      res.status(201).json(data);
    })
})
app.listen(port, (req) => {
  console.log(`listening on port ${port}`)
})