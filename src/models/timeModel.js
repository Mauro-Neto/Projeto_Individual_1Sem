var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, regiao, titulosNacionais, titulosInternacionais) {
    console.log("ACESSEI O TIME MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, regiao, titulosNacionais, titulosInternacionais);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO time_lol (nome, regiao, titulosNacionais, titulosInternacionais) VALUES ('${nome}', '${regiao}', '${titulosNacionais}', '${titulosInternacionais}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idTime,nome,regiao,titulosNacionais, titulosInternacionais FROM time_lol`;

  return database.executar(instrucaoSql);
}



module.exports = {
    cadastrar,listar
};