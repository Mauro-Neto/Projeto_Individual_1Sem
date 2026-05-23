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

    var instrucaoSql = `SELECT nome,total
    FROM vw_times_favoritos
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

function buscarTotalInvocador() {
  var instrucaoSql = `SELECT COUNT(*) as TotalInvocador FROM invocador`;

  return database.executar(instrucaoSql);
}

function buscarTotalTime() {
  var instrucaoSql = `SELECT COUNT(*) as TotalTime FROM time_lol`;

  return database.executar(instrucaoSql);
}

function buscarMediaQuiz() {
  var instrucaoSql = `SELECT TRUNCATE(AVG(pontuacao),0) as MediaQuiz FROM invocador WHERE pontuacao IS NOT NULL`;

  return database.executar(instrucaoSql);
}
function buscarTimeFavorito() {
  var instrucaoSql = `SELECT nome
    FROM vw_times_favoritos
LIMIT 1;`;

  return database.executar(instrucaoSql);
}

function listarTimes() {
  var instrucaoSql = `SELECT * FROM time_lol;`;

  return database.executar(instrucaoSql);
}

function listarInvocadores() {
  var instrucaoSql = `SELECT nick,pontuacao FROM invocador
  WHERE pontuacao IS NOT NULL
  ORDER BY pontuacao DESC
  LIMIT 10;`;

  return database.executar(instrucaoSql);
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
