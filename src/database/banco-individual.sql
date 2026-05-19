CREATE DATABASE ProjetoInd;
USE ProjetoInd;

CREATE TABLE IF NOT EXISTS time_lol(
idTime INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
regiao VARCHAR(5) NOT NULL,
titulosNacionais INT,
titulosInternacionais INT
);

CREATE TABLE IF NOT EXISTS invocador(
idInvocador INT PRIMARY KEY AUTO_INCREMENT,
nick VARCHAR(100) NOT NULL,
timeFavorito INT,
email VARCHAR(100) NOT NULL,
senha VARCHAR(20) NOT NULL,
pontuacao INT,
CONSTRAINT chFkTime
FOREIGN KEY (timeFavorito) REFERENCES time_lol (idTime)
);

SELECT * FROM invocador;
SELECT * FROM time_lol;

SELECT nome,
SUM(titulosNacionais) as nacionais,
SUM(titulosInternacionais) as internacionais
FROM time_lol
GROUP BY nome
ORDER BY nacionais+internacionais DESC
LIMIT 5;

CREATE VIEW vw_times_favoritos AS
SELECT nome, COUNT(*) as total
FROM invocador JOIN time_lol ON timeFavorito = idTime
GROUP BY nome
ORDER BY total DESC;

SELECT 
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
ORDER BY faixa;

DELETE FROM invocador WHERE idInvocador = 9 OR idInvocador = 10 OR idInvocador = 11;
ALTER TABLE invocador MODIFY COLUMN email VARCHAR(100) NOT NULL UNIQUE;