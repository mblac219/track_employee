DROP DATABASE IF EXISTS company_db;
-- Creates company database 
CREATE DATABASE company_db;

-- selects database
USE company_db;

-- Creates department table
CREATE TABLE department(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL
);
-- Creates role table

CREATE TABLE role(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id)
);

CREATE TABLE employee(
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
FOREIGN KEY (role_id)
REFERENCES role(id),
manager_id INT,
FOREIGN KEY (manager_id)
REFERENCES manager(id)
ON DELETE SET NULL
);