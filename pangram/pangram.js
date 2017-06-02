const isPangram = sentence => {
  const filteredSentence = sentence
    .toLowerCase()
    .split('')
    .filter(letter => letter.match(/[a-z]/))
  return new Set(filteredSentence).size === 26
}

module.exports = function (sentence) {
  this.isPangram = () => isPangram(sentence)
}
