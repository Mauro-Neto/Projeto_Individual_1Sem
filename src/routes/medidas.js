var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

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

router.get("/TotalInvocador/", function (req, res) {
    medidaController.buscarTotalInvocador(req, res);
});

router.get("/TotalTime/", function (req, res) {
    medidaController.buscarTotalTime(req, res);
});

router.get("/MediaQuiz/", function (req, res) {
    medidaController.buscarMediaQuiz(req, res);
});

router.get("/TimeFavorito/", function (req, res) {
    medidaController.buscarTimeFavorito(req, res);
});

router.get("/ListarTimes/", function (req, res) {
    medidaController.listarTimes(req, res);
});

router.get("/ListarInvocadores/", function (req, res) {
    medidaController.listarInvocadores(req, res);
});

module.exports = router;