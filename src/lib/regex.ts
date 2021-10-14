const CLEAN_NUMBER = /(?<!^)\+|[^\d+]+/g
const INTERNATIONAL_PHONE_NUMBER =
  /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
const NUMBERS_ONLY = /^[0-9]*$/
const PHONE_NUMBER_AREA_CODE = /^(\+?\d{1,3}|\d{1,4})$/

export {
  CLEAN_NUMBER,
  INTERNATIONAL_PHONE_NUMBER,
  NUMBERS_ONLY,
  PHONE_NUMBER_AREA_CODE,
}