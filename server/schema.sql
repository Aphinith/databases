CREATE DATABASE chat;

USE chat;

CREATE TABLE user(
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  room varchar(50)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int PRIMARY KEY,
  user_text varchar(250) NOT NULL UNIQUE,
  room varchar(50),
  user_id int,
  created_at varchar(50),
);

CREATE TABLE room(
  id int PRIMARY KEY,
  room_name varchar(50)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

