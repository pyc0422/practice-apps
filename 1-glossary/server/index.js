require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;
const { preWords, findAll, save, findByKeyWord, update, deleteOne } = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/update', (req, res) => {
  return findAll()
    .then((data) => {
      res.status(200).json(data);
    })
});

app.post('/add', (req, res) => {
  const word = req.body;
  return save(word)
    .then((data) => {
      res.status(201).json(data);
    })
});

app.post('/search', (req, res) => {
  const keyWord = req.body;
  console.log('keyWord', keyWord);
  return findByKeyWord(keyWord.key)
    .then((results) => {
      if (results.length === 0) {
        res.send('Cannot find such word');
      } else {
        res.status(200).json(results);
      }
    })
});

app.post('/edit', (req, res) => {
  let oldWord = req.body.before;
  let newWord = req.body.after;
  return update(oldWord, newWord)
    .then(() => {
      res.status(201).send('success');
    })
})

app.delete('/delete', (req, res) => {
  const word = req.body;
  return deleteOne(word)
    .then(() => {
      res.status(200).send('delete word success!');
    })
})
app.listen(port, (req) => {
  console.log(`listening on port ${port}`)
})