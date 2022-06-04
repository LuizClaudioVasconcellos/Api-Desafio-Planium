const fs = require('fs')
const dataPlans = require('../db/plans.json')
const dataPrices = require('../db/prices.json')
var databaseBeneficiario = require('../../beneficiarios.json')
var databaseProspostas = require('../../proposta.json')

module.exports = function verificaPlano(obj) {
  console.log(obj)

  let jsonArray = []
  databaseProspostas.forEach(item => {
    jsonArray.push(item)
  })

  jsonArray.push(obj)

  let jsonArrayBeneficiarios = []
  databaseBeneficiario.forEach(item => {
    jsonArrayBeneficiarios.push(item)
  })

  jsonArrayBeneficiarios.push(obj.beneficiarios)

  for (let i = 0; i < jsonArray.length; i++) {
    for (let index = 0; index < dataPlans.length; index++) {
      if (jsonArray[i].planRegistro === dataPlans[index].codigo) {
        dataPrices.forEach(price => {
          if (dataPlans[index].codigo === price.codigo) {
            if (jsonArray[i].qtdBeneficiarios >= price.minimo_vidas) {
              jsonArray[i].beneficiarios.forEach(el => {
                if (el.idade >= 0 && el.idade <= 17) {
                  el.preco = price.faixa1
                } else if (el.idade > 17 && el.idade <= 40) {
                  el.preco = price.faixa2
                } else if (el.idade > 40) {
                  el.preco = price.faixa3
                }
              })
            }
          }
        })
      }
    }

    jsonArray[i].valorTotal = 0
    jsonArray[i].beneficiarios.forEach(item => {
      jsonArray[i].valorTotal += item.preco
    })
  }

  let dataJsonBeneficiarios = JSON.stringify(jsonArrayBeneficiarios)

  fs.writeFile('beneficiarios.json', dataJsonBeneficiarios, 'utf8', err => {
    console.log(err)
  })

  let dataJsonProposta = JSON.stringify(jsonArray)

  fs.writeFile('proposta.json', dataJsonProposta, 'utf8', err => {
    console.log(err)
  })

  return true
}