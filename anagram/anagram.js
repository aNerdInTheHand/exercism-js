function Anagram (word) {
  this.matches = (...wordList) => findAnagrams(word, ...wordList)
}

const sortLetters = word => word.toLowerCase().split('').sort().join('')
const filterDuplicates = (word, candidates) => candidates.filter(candidate => candidate.toLowerCase() !== word.toLowerCase())

const findAnagrams = (word, ...candidates) => {
  // nested array if array passed in as spread param
  const typedCandidates = candidates[0] instanceof Array ? candidates[0] : candidates
  const uniqueCandidates = filterDuplicates(word, typedCandidates)
  return uniqueCandidates.filter(candidate => sortLetters(candidate) === sortLetters(word))
}

module.exports = Anagram
