function Hamming () {
  this.compute = (strandA, strandB) => {
    let hamCount = 0

    if (strandA.length !== strandB.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    aLetters = strandA.split("")
    bLetters = strandB.split("")

    aLetters.map((letter, i) => {
      if (letter !== bLetters[i]) {
        hamCount++
      }
    })

    return hamCount
  }
}

module.exports = Hamming
