// awful clunky solution - planning to refactor!
const singVerse = verseNumber => {
  return `${partOne(verseNumber)}\n${partTwo(verseNumber)}`
}

const singSong = (start, end) => {
  const verse = start
  return start > end ? `${singVerse(verse)}\n${singSong(verse - 1, end)}` : singVerse(end)
}

const partOne = verseNumber => `${bottles(verseNumber, true)} of beer on the wall, ${bottles(verseNumber)} of beer.`

const partTwo = verseNumber => `${takeOneDown(verseNumber)}, ${bottles(verseNumber - 1)} of beer on the wall.\n`

const bottles = (verse, capitalise = false) => {
  let numberOfBottles
  switch (verse) {
    case 0:
      numberOfBottles = `no more bottles`
      break
    case 1:
      numberOfBottles = `1 bottle`
      break
    default:
      numberOfBottles = `${verse < 0 ? 99 : verse} bottles`
      break
  }
  if (capitalise) {
    numberOfBottles = numberOfBottles.charAt(0).toUpperCase() + numberOfBottles.slice(1)
  }
  return numberOfBottles
}

const itOrOne = verse => verse === 1 ? 'it' : 'one'
const takeOneDown = verse => verse > 0 ? `Take ${itOrOne(verse)} down and pass it around` : `Go to the store and buy some more`

module.exports = function () {
  this.sing = (start, end = 0) => singSong(start, end)

  this.verse = verse => singVerse(verse)
}
