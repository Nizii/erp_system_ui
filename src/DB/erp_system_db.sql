DROP DATABASE IF EXISTS `erp_system_db`;
CREATE DATABASE `erp_system_db`; 
USE `erp_system_db`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE `user` (
  `user_id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `user` VALUES (1,'Nizam','123456');

CREATE TABLE `customer` (
	`customer_nr` int(11) NOT NULL,
	`surname` varchar(50) NOT NULL,
	`lastname` varchar(50) NOT NULL,
	`dob` varchar(50) NOT NULL,
	`street` varchar(50) DEFAULT NULL,
	`nr` varchar(50) DEFAULT NULL,
	`postcode` varchar(50) DEFAULT NULL,
	`country` varchar(50) NOT NULL,
	`cellphone` varchar(50) NOT NULL,
	`landlinephone` varchar(50) NOT NULL,
	`note` varchar(50) DEFAULT NULL,
	`email` varchar(50) DEFAULT NULL,
	PRIMARY KEY (`customer_nr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `customer` VALUES (1,'Max','Meyer','15.05.1997','Hauptstrasse','31','8000','CH','076123456','Erster Kunde','max.meyer@bsp.ch');

CREATE TABLE `customer_bill` (
  `customer_bill_nr` int(11) NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `customer_street` varchar(50) NOT NULL,
  `customer_postcode` varchar(50) NOT NULL,
  `amount` decimal(9,2) NOT NULL,
  `currency` varchar(50) NOT NULL,
  `issued_on` date NOT NULL,
  `payment_date` date DEFAULT NULL,
  PRIMARY KEY (`customer_bill_nr`),
  KEY `FK_client_id` (`client_id`),
  CONSTRAINT `FK_customer_nr` FOREIGN KEY (`customer_nr`) REFERENCES `customer` (`customer_nr`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `customer_bill` VALUES (1,'Firma A','Gutstrasse 150','6200',1500,'CHF','2022-03-09','2023-03-29');

CREATE TABLE `products` (
  `product_nr` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `product_size` varchar(50) NOT NULL,
  `purchasing_price_per_unit` decimal(4,2) NOT NULL,
  `selling_price_per_unit` varchar(50) NOT NULL,
  `unit` varchar(50) NOT NULL,
  `units_available` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`product_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `products` VALUES (1,'Flexrohr','20mm',5.9,6.9,'Meter',20,'gerillt');

