CREATE TABLE IF NOT EXISTS User
(
    id int(4) not null auto_increment primary key,
    openid char(32) not null unique,
    phone char(13) not null unique,
	pwd char(32) not null,
	regTime date not null,
	lastLoginTime timestamp not null,
	name varchar(20) not null,
	gender int(4) not null default 1,
	birthday date,
	loginCnt int(4) not null default 1,
	index(phone)
)DEFAULT CHARACTER SET utf8;
