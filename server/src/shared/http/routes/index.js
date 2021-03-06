const express = require("express");
const routes = express.Router();

const dataPlans = require("../../../db/plans.json");
const dataPrices = require("../../../db/prices.json");
var databaseBeneficiario = require("../../../../beneficiarios.json");
var databasePropostas = require("../../../../proposta.json");
const exceptionVidas = require("../../../services/exceptionvida");
const exceptionRegistroNotFound = require("../../../services/exceptions");
var verificaPlano = require("../../../services/plans");

//Busca dados
routes.get("/planos", (req, res) => {
  return res.json(dataPlans);
});

routes.get("/precos", (req, res) => {
  return res.json(dataPrices);
});

routes.get("/beneficiarios", (req, res) => {
  return res.json(databaseBeneficiario);
});

routes.get("/propostas", (req, res) => {
  return res.json(databasePropostas);
});

//Insere dados
routes.post("/add_ben", (req, res) => {
  const body = req.body;
  console.log(req.body);
  if (!body) {
    return res.status(400).end();
  }

  if (!exceptionRegistroNotFound(req.body)) {
    return res.status(400).send("Esse Plano é inexistente.");
  }

  const ex = exceptionVidas(req.body);
  if (ex) {
    return res
      .status(400)
      .send("Número de usuários abaixo da exigência do plano.");
  }

  verificaPlano(req.body);
  return res.json(req.body);
});

module.exports = routes;
