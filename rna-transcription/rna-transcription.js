var DnaTranscriber = function () {}

function transcribe (dnaStrand, rnaStrand, iterations) {

  if (iterations === 0) {
    return rnaStrand
  }

  const nucleotide = dnaStrand.substring(0, 1)
  const remainingIterations = dnaStrand.length - 1
  let rna
  switch (nucleotide) {
    case 'C':
      rna = 'G'
      break
    case 'G':
      rna = 'C'
      break
    case 'A':
      rna = 'U'
      break
    case 'T':
      rna = 'A'
      break
    default:
      throw new Error('Invalid input')
  }

  const newDnaStrand = dnaStrand.substring(1, dnaStrand.length)
  const newRnaStrand = rnaStrand.concat(rna)

  return transcribe(newDnaStrand, newRnaStrand, remainingIterations)
}

DnaTranscriber.prototype.toRna = function (dnaStrand) {
  let rnaStrand = ''
  return transcribe(dnaStrand, rnaStrand, dnaStrand.length)
}

module.exports = DnaTranscriber
