const dataPlans = require('../db/plans.json')

module.exports = function exceptionRegistroNotFound(obj) {
  let validate = false
  dataPlans.forEach(el => {
    if (el.codigo === obj.planRegistro) {
      validate = true
    }
  })
  return validate
}