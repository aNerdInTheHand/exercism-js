const isIsogram = phrase => splitPhrase(phrase).length === new Set(splitPhrase(phrase)).size

const splitPhrase = phrase => phrase
  .toLowerCase()
  .split('')
  .filter(letter => letter.match(/[a-zé]/))

module.exports = function (phrase) {
  this.isIsogram = () => isIsogram(phrase)
}
