var medidaModel = require("../models/medidaModel");

function buscarTitulosRegiao(req, res) {
    medidaModel.buscarTitulosRegiao().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os titulos por região.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTitulosTime(req, res) {
    medidaModel.buscarTitulosTime().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os titulos por time.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTimesFavoritos(req, res) {
    medidaModel.buscarTimesFavoritos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os titulos por time.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarPontuacoes(req, res) {
    medidaModel.buscarPontuacoes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os titulos por time.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTotalInvocador(req, res) {
  medidaModel.buscarTotalInvocador().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarTotalTime(req, res) {
  medidaModel.buscarTotalTime().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarMediaQuiz(req, res) {
  medidaModel.buscarMediaQuiz().then((resultado) => {
    res.status(200).json(resultado);
  });
}
function buscarTimeFavorito(req, res) {
  medidaModel.buscarTimeFavorito().then((resultado) => {
    res.status(200).json(resultado);
  });
}
function listarTimes(req, res) {
  medidaModel.listarTimes().then((resultado) => {
    res.status(200).json(resultado);
  });
}
function listarInvocadores(req, res) {
  medidaModel.listarInvocadores().then((resultado) => {
    res.status(200).json(resultado);
  });
}
module.exports = {
    buscarTitulosRegiao,
    buscarTitulosTime,
    buscarTimesFavoritos,
    buscarPontuacoes,
    buscarTotalInvocador,
    buscarTotalTime,
    buscarMediaQuiz,
    buscarTimeFavorito,
    listarTimes,
    listarInvocadores
}