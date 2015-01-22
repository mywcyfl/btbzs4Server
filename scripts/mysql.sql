CREATE TABLE User
(
    id int(4) not null auto_increment primary key,
    openid char(32) not null unique,
    phone int(4) not null unique
)DEFAULT CHARSET utf8;
