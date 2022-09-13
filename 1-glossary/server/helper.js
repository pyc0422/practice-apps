const { faker } = require("@faker-js/faker");


const getWords = () => {
  let words= faker.random.words(10).split(' ');
  let preWords = words.map(word => {
    let length = (Math.random() * 15);
    let define = faker.random.words(length);
    return {word: word, definition: define};
  })
  return preWords;
}

module.exports = getWords;