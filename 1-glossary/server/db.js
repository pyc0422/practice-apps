require("dotenv").config();
const mongoose = require("mongoose");
//const Promise = require("bluebird");
const getWords = require("./helper");
mongoose.connect('mongodb://localhost/glossary', { useNewUrlParser: true, useUnifiedTopology: true });

let wordsSchema = new mongoose.Schema({
  word: String,
  definition: String,
  createAt: {type: Date, default: Date.now}
})

let Words = mongoose.model('Words', wordsSchema);
//add some random words at beginning
// Words.find({})
//   .then((data) => {
//     if (data.length !== 0) {
//       let message = 'already has data';
//       throw message;
//     } else {
//       const newWords = getWords();
//       let promises = [];
//       newWords.forEach(word => {
//         promises.push(Words.create(word));
//       });
//       Promise.all(promises);
//     }
//   })


module.exports = {
  preWords: () => {
    Words.deleteMany({});
    const newWords = getWords();
    let promises = [];
    newWords.forEach(word => {
      promises.push(Words.create(word));
    });
    Promise.all(promises);
  },

  findAll: () => {
    return Words.find({}).sort('-createAt').limit(10);
  },

  save: (newWord) => {
    return Words.create(newWord)
  },

  edit: (word) => {
    return Words.updateOne(word);
  },

  delete: (word) => {
    return Words.deleteOne(word);
  },

  findByKeyWord: (keyWord) => {
    console.log('db key: ', keyWord);
    return Words.find({word: {$regex: keyWord, $options: 'i'}});
  }
}


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
