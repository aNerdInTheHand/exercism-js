const invalidNumber = '0000000000'

const formatNumber = phoneNo => {
  const onlyNumbers = cleanNumber(phoneNo)
  const noWithoutCountry = stripCountry(onlyNumbers)
  const formattedNumber = checkLength(noWithoutCountry)
  return formattedNumber || invalidNumber
}

const areaCode = phoneNo => formatNumber(phoneNo).slice(0, 3)
const exchangeCode = phoneNo => formatNumber(phoneNo).slice(3, 6)
const subscriberNo = phoneNo => formatNumber(phoneNo).slice(6)

const cleanNumber = phoneNo => phoneNo.split(/[\D]/).join('')
const stripCountry = phoneNo => firstCharOne(phoneNo) && phoneNo.length === 11 ? phoneNo.slice(1) : phoneNo
const checkLength = phoneNo => phoneNo.length === 10 ? phoneNo : false
const firstCharOne = phoneNo => phoneNo.charAt(0) === '1'

const prettyFormat = phoneNo => `(${areaCode(phoneNo)}) ${exchangeCode(phoneNo)}-${subscriberNo(phoneNo)}`

module.exports = function (phoneNo) {
  this.number = () => formatNumber(phoneNo)
  this.areaCode = () => areaCode(phoneNo)
  this.toString = () => prettyFormat(phoneNo)
}
