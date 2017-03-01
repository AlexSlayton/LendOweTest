### Schema

CREATE DATABASE lendowe_db;
USE lendowe_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	phone int(255) NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE item
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
	notification boolean NOT NULL,
	notification_sent_at TIMESTAMP  NOT NULL,
	email varchar(255) NOT NULL,
	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

