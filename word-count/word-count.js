function Words () {}

Words.prototype.count = wordString => {
  const splitter = /[\s,:!&@$%^&.¡¿?]/
  const words = wordString.split(splitter).map(w => w.toLowerCase())
  let wordCount = {}
  words.map(word => {
    if (word) {
      const formattedWord = word.startsWith('\'') && word.endsWith('\'')
      ? word.slice(1, word.length - 1)
      : word
      let count = wordCount[formattedWord]
      wordCount[formattedWord] = count + 1 || 1
    }
  })
  return wordCount
}

module.exports = Words
