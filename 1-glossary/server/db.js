require("dotenv").config();
const mongoose = require("mongoose");
const Promise = require("bluebird");
const getWords = require("./helper");
console.log(typeof getWords);
mongoose.connect('mongodb://localhost:5000/glassary');

const wordsSchema = new mongoose.Schema({
  word: String,
  definition: String,
  createAt: {type: Date, default: Date.now}
})

const Words = mongoose.model('Words', wordsSchema);


const preWords = () => {
  const newWords = getWords();
  let promises = [];
  newWords.forEach(word => {
    promises.push(Words.create(word));
  });
  Promiseify.All(promises);
}

module.exports = Words;
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
