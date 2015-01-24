var mysql = require('./mysql/mysql');
var utils = require('../../util/utils');
var User = require('../../models/user');
var userDao = module.exports;

/**
 * Get userInfo by phone
 * @param {Number} phone
 * @param {function} cb
 */
userDao.getUserByPhone = function (phone, cb){
 	var sql = 'select * from  User where phone = ?';
 	var args = [phone];
 	mysql.query(sql,args,function(err, res){
		if(err !== null){
			cb(err.message, null);
		} else {
			if (!!res && res.length === 1) {
				cb(null, new User(res[0]));
			} else {
				cb(' user not exist ', null);
			}
		}
	});
};

/**
 * Create a new user
 * @param (String) phone
 * @param {function} cb Call back function.
 */
userDao.createUser = function (phone, pwd, cb){
	if(!phone || !pwd){
		cb('phone or pwd can not be null', null);
	}

 	var sql = 'insert into User (openid, phone, pwd, regTime, lastLoginTime) values(?,?,?,?,?)';
	var user = new User({phone: phone, pwd: pwd})
	var args = [user.openid, phone, pwd, user.regTime, user.lastLoginTime];

	mysql.insert(sql, args, function(err,res){
    	if(err !== null){
    		cb({code: err.number, msg: err.message}, null);
    	} else {
			cb(null, user);
    	}
	});
};



