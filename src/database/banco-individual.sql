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

