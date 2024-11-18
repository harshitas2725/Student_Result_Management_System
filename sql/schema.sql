CREATE DATABASE student_result;

USE student_result;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subject_id INT NOT NULL,
    grade VARCHAR(2) NOT NULL,
    credits INT NOT NULL,
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);