module.exports = function (date) {
  this.date = function () {
    return new Date(date.getTime() + 1e12)
  }
}
