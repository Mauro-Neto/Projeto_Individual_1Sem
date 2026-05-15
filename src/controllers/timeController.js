var timeModel = require("../models/timeModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var regiao = req.body.regiaoServer;
    var titulosNacionais = req.body.titulosNacionaisServer;
    var titulosInternacionais = req.body.titulosInternacionaisServer;
    //var fkEmpresa = req.body.idEmpresaVincularServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else if (regiao == undefined) {
        res.status(400).send("Sua região está undefined!");
    } else if (titulosNacionais == undefined) {
        res.status(400).send("Seus Titulos Nacionais está undefined!");
    } else if (titulosInternacionais == undefined) {
        res.status(400).send("Seus Titulos Internacionais está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        timeModel.cadastrar(nome, regiao, titulosNacionais, titulosInternacionais)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
  timeModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}



module.exports = {
    cadastrar,listar
}