var database = require("../database/config");

function buscarTitulosRegiao() {

    var instrucaoSql = `SELECT regiao,
SUM(titulosNacionais) as nacionais,
SUM(titulosInternacionais) as internacionais
FROM time_lol
GROUP BY regiao;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTitulosTime() {

    var instrucaoSql = `SELECT nome,
SUM(titulosNacionais) as nacionais,
SUM(titulosInternacionais) as internacionais
FROM time_lol
GROUP BY nome
ORDER BY nacionais+internacionais DESC
LIMIT 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTimesFavoritos() {

    var instrucaoSql = `SELECT nome,
    COUNT(*) as total
FROM invocador JOIN time_lol ON timeFavorito = idTime
GROUP BY nome
ORDER BY total DESC
LIMIT 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacoes() {
    var instrucaoSql = `SELECT 
  CASE 
    WHEN pontuacao BETWEEN 0 AND 20 THEN '0-20'
    WHEN pontuacao BETWEEN 21 AND 40 THEN '21-40'
    WHEN pontuacao BETWEEN 41 AND 60 THEN '41-60'
    WHEN pontuacao BETWEEN 61 AND 80 THEN '61-80'
    ELSE '81-100'
  END AS faixa,
  COUNT(*) AS total
FROM invocador
WHERE pontuacao IS NOT NULL
GROUP BY faixa
ORDER BY faixa DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarTitulosRegiao,
    buscarTitulosTime,
    buscarTimesFavoritos,
    buscarPontuacoes
}
