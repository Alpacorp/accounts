CREATE DATABASE users_admin
USE users_admin

-- Users table

CREATE TABLE users
(
    iduser INT(11) NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    profile VARCHAR(30) NOT NULL,
    birthdate VARCHAR(20) NOT NULL,
    city VARCHAR(30) NOT NULL,
    agent INT(11) NOT NULL,
    creation TIMESTAMP
);

INSERT INTO users
VALUES(null, "Alejandro", "Magno", "Masculino", "Ingeniero Sistemas", "3 de julio", "Bogotá", 1, now());

-- Social Media table

CREATE TABLE social_media
(
    idusersocial INT(11) PRIMARY KEY NOT NULL,
    email VARCHAR(100) NOT NULL,
    typeaccount VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    passccount VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL,
    comments VARCHAR(200),
    phone INT(30)
);

ALTER TABLE social_media
ADD CONSTRAINT fk_usersoc FOREIGN KEY
(idusersocial) REFERENCES users
(iduser)

-- Mentions table

CREATE TABLE mentions
(
    idmention INT(11) PRIMARY KEY,
    iduserment INT(11) NOT NULL,
    typeaccment INT(20) NOT NULL,
    urlment INT(250) NOT NULL,
    creation TIMESTAMP
);

ALTER TABLE mentions
ADD CONSTRAINT fk_ment FOREIGN KEY
(iduserment) REFERENCES users
(iduser)

CREATE TABLE agents
(
    idagent INT(11) PRIMARY KEY ,
    agentname VARCHAR(50) NOT NULL,
    agentlastname VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    profile VARCHAR(20) NOT NULL
);

CREATE TABLE profiles
(
    idprofile INT(11) PRIMARY KEY NOT NULL,
    profilename VARCHAR(50) NOT NULL
);

CREATE TABLE cities
(
    idcity INT(11) PRIMARY KEY,
    city VARCHAR(50) NOT NULL
);

INSERT INTO cities
VALUES
    (null, 'Antioquia'),
    (null, 'Atlantico'),
    (null, 'Bogotá'),
    (null, 'Bolivar'),
    (null, 'Boyaca'),
    (null, 'Caldas'),
    (null, 'Caqueta'),
    (null, 'Cauca'),
    (null, 'Cesar'),
    (null, 'Cordova'),
    (null, 'Cundinamarca'),
    (null, 'Choco'),
    (null, 'Huila'),
    (null, 'La Guajira'),
    (null, 'Magdalena'),
    (null, 'Meta'),
    (null, 'Nariño'),
    (null, 'Norte de Santander'),
    (null, 'Quindio'),
    (null, 'Risaralda'),
    (null, 'Santander'),
    (null, 'Sucre'),
    (null, 'Tolima'),
    (null, 'Valle'),
    (null, 'Arauca'),
    (null, 'Casanare'),
    (null, 'Putumayo'),
    (null, 'San Andres'),
    (null, 'Amazonas'),
    (null, 'Guainia'),
    (null, 'Guaviare'),
    (null, 'Vaupes'),
    (null, 'Vichada');

SELECT CONCAT(idusersocial, ' ', created)
FROM social_media

SELECT date_format(created, '%Y/%M/%d')
FROM social_media

SELECT CONCAT(idusersocial, ' ', date_format(created, '%Y/%M/%d'))
FROM social_media

SELECT CONCAT(iduserment, ' ', typeaccment, ' ', date_format(creation, '%d'))
FROM mentions
WHERE iduserment = 12 AND date = date_format(now(), '%d')


SELECT CONCAT(iduserment, ' ', typeaccment, ' ', date_format(creation, '%d'))
FROM mentions
WHERE creation = date_format(now(), '%d') AND iduserment = 13


INSERT INTO mentions
VALUES(null, 70, 'Facebook', 'https://facebook.com', null, now())


-- script para determinar el número de menciones por día por red social

SELECT CONCAT(iduserment, ' ', typeaccment, ' ', date_format(creation, '%d'))
FROM mentions
WHERE iduserment = 70 AND date_format(now(), '%d') = date_format(date, '%d') AND typeaccment = 'Facebook'

