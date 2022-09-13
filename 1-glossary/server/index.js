require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.user(bodyParser.josn());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})