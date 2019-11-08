CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
	id INTEGER(255) NOT NULL AUTO_INCREMENT,
    product VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    price INTEGER(255) NOT NULL,
    stock INTEGER(255) NOT NULL,
    PRIMARY KEY (id)
);