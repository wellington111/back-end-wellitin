CREATE TABLE ALUNOS (
ID INT(2) NOT NULL PRIMARY KEY   AUTO_INCREMENT,
NOME VARCHAR(50) NOT NULL,
IDADE int(100) NOT NULL 
);

INSERT INTO alunos(nome,idade) VALUES ("João", 5);
INSERT INTO alunos(nome,idade) VALUES ("Pedro", 10);
INSERT INTO alunos(nome,idade) VALUES ("Gariel", 18);
INSERT INTO alunos(nome,idade) VALUES ("Victor", 100);
INSERT INTO alunos(nome,idade) VALUES ("Paulo", 9);

SELECT * FROM alunos WHERE idade >= 18;

UPDATE alunos set idade = 20 where id = 1;
UPDATE alunos set idade = 10 where id =4;