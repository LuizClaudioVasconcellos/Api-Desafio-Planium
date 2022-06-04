class RegistroBeneficiario {
  beneficiarios = []
  valorTotal = Number
  constructor(planRegistro, beneficiarios, qtdBeneficiarios) {
    this.planRegistro = planRegistro
    this.beneficiarios = beneficiarios
    this.qtdBeneficiarios = qtdBeneficiarios
     this.valorTotal = 0
  }

  calcularPlano() {
    this.beneficiarios.forEach(item => {
      this.valorTotal += item.price
    })
  }

  adicionarPrecoPorIdade() {
    this.beneficiarios.forEach(beneficiario => {
      if (beneficiario.idade >= 0 && beneficiario.idade < 18) {
        beneficiario.price = 0
      }
    })
  }
}

export default RegistroBeneficiario