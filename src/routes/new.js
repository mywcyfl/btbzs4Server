var express = require('express');
var userDao = require('../lib/dao/userDao');
var code    = require('../util/code');
var utils   = require('../util/utils');
var router  = express.Router();


/*
 * new user register. 
 * reg?phone=***&pwd=***
 */
router.get('/reg', function(req, res) {
	// var msg = req.body;	
	var msg     = req.query;
	msg.pwd     = String(msg.pwd).trim();
	msg.phone   = String(msg.phone).trim();

	if(!msg.phone || !msg.pwd){
		res.send({errCode: code.ERR_INVALID_PARAMETERS});
		return;
	}

	// 检查数据库中是否已有此人
	userDao.getUserByPhone(msg.phone, function(err, user){
		if(!err){
			res.send({errCode: code.ERR_USER_ALREADY_EXISTS, 
					msg: 'user: ' + msg.phone + 'is already exists. please login directly.'});
			return;
		}

		// 创建用户
		userDao.createUser(msg.phone, msg.pwd, function(err, user){
			if(!!err){
				// 创建失败
				res.send({errCode: code.ERR_CREATE_IN_DB_FAILED, msg: err});
			} else {
				// 创建成功
				// TODO
				// 将该用户加入redis
				res.send({errCode: code.OK, msg: 'register success', user: user.clientInfoToJson()});
			}
		});

	});
});

/**
 * user login 
 * login?phone=***&pwd=***
 */
router.get('/login', function(req, res) {
	var msg = req.query;
	// var msg = req.body;	// when post method
	msg.pwd = String(msg.pwd).trim();
	msg.phone = String(msg.phone).trim();

	if(!msg.phone || !msg.pwd){
		res.send({errCode: code.ERR_INVALID_PARAMETERS});
	}

	userDao.getUserByPhone(msg.phone, function(err, user){
		if(!!err){
			res.send({errCode: code.ERR_USER_DO_NOT_EXISTS, msg: 'user do not exists.'});
            return;
		} else if(user.pwd != msg.pwd) {
			res.send({errCode: code.ERR_WRONG_PASSWORD, msg: 'wrong password.'});
            return;
		}

		// 登陆成功，返回用户信息
		// TODO
		// 将从数据库中查询出的用户信息加入redis
		res.send({errCode: code.OK, user: user.clientInfoToJson()});
	});
});


module.exports = router;
