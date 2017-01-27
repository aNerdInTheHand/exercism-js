function Year (year) {

  this.isLeap = function () {

    let isLeap = false

    if (year % 4 === 0) {
      isLeap = true
    }

    if (year % 100 === 0 && year % 400 !== 0) {
      isLeap = false
    }

    return isLeap
  }
}

module.exports = Year
