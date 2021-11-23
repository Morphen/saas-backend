CREATE DATABASE SAAS

CREATE TABLE USERS {
    id: int NOT NULL AUTO_INCREMENT,
    name : varchar(140) not null,
    email : varchar(50) not null,
    password : varchar(50) not null,
    PRIMARY KEY (id)
}

CREATE TABLE HOSTNAMES {
    id: int NOT NULL AUTO_INCREMENT,
    fqdn : varchar(140) not null,
    PRIMARY KEY (id)
}


