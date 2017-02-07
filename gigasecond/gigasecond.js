function Gigasecond (date) {
  this.startDate = date
}

const preEpoch = date =>  new Date(1970, 0, 1) - date > 0
const preEpochStart = date => date // TODO - epoch - date + 1e9
const postEpochStart = date => new Date(date.setSeconds(getSeconds() + 1e9))

Gigasecond.prototype.date = function () {
  return preEpoch(this.startDate) ? preEpochStart(this.startDate) : postEpochStart(this.startDate)
}

module.exports = Gigasecond
