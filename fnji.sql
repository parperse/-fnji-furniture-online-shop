#设置解析为中文
SET NAMES UTF8; 
DROP DATABASE IF EXISTS fnji;
CREATE DATABASE fnji CHARSET='UTF8';
USE fnji;
#1.1.1用户信息表(fnji_user)
CREATE TABLE fnji_user(
uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
uname VARCHAR(32),
upwd VARCHAR(32),
validate VARCHAT(32),
email VARCHAR(64),
phone VARCHAR(16) NOT NULL UNIQUE,
)
#1.2.1