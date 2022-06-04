module.exports = function exceptionVidas(obj) {
  let valid = false
  if (obj.beneficiarios.length == 0) {
    valid = true
  }
  return valid
}