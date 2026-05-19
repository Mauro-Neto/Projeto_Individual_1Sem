var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

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
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarTitulosRegiao,
    buscarTitulosTime,
    buscarTimesFavoritos,
    buscarPontuacoes,
    buscarTotalInvocador,
    buscarTotalTime,
    buscarMediaQuiz,
    buscarTimeFavorito
}