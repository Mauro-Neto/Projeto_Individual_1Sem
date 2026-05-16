var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/TitulosRegiao/", function (req, res) {
    medidaController.buscarTitulosRegiao(req, res);
});

router.get("/TitulosTime/", function (req, res) {
    medidaController.buscarTitulosTime(req, res);
});

router.get("/TimesFavoritos/", function (req, res) {
    medidaController.buscarTimesFavoritos(req, res);
});

router.get("/Pontuacoes/", function (req, res) {
    medidaController.buscarPontuacoes(req, res);
});

module.exports = router;