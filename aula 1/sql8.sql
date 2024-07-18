CREATE TABLE CURSO (
ID INT(2) NOT NULL PRIMARY KEY   AUTO_INCREMENT,
NOME VARCHAR(50) NOT NULL,
DESCRICAO VARCHAR(50) NOT NULL,
DURAÇÃO INT(3) NOT NULL 
);

INSERT INTO curso (nome, descricao, duração) VALUES ("Programação em Python", "Aprenda a programar em python hoje mesmo!!",450 );
INSERT INTO curso (nome, descricao, duração) VALUES ("Desenvolvedor de jogos", "Crie seus jogos você mesmo!!",240 );
INSERT INTO curso (nome, descricao, duração) VALUES ("Programação Front-end", "Aprenda a Programar Front-end ",140 );
INSERT INTO curso (nome, descricao,duração) VALUES ("Programação Back-end", "Aprenda a programar Back-end ainda hoje!!",200);
INSERT INTO curso (nome, descricao, duração) VALUES ("Logica de Programamção", "Aprenda a programar Hoje mesmo!!",100 );

SELECT * FROM CURSO;

Select nome, duração, descricao FROM curso 
	where duração = 90;

UPDATE cursos set descricao = "Programar"  where id = 3;

delete from curso where id = 1;

select * from curso
