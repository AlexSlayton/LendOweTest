### Schema

CREATE DATABASE lendowe_db;
USE lendowe_db;

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1

CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `lenderId` int(11) NOT NULL,
  `borrowerId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lenderId` (`lenderId`),
  KEY `borrowerId` (`borrowerId`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`lenderId`) REFERENCES `LenderBorrowers` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`borrowerId`) REFERENCES `LenderBorrowers` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1

CREATE TABLE `LenderBorrowers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `lenderborrowers_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1