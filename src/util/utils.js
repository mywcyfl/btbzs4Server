/**
 * 存放一些全局性的函数
 */
var crypto = require('crypto');

var utils = module.exports;

/*
 * 创建OpenID
 */
utils.createOpenid = function(phone){
	// 利用手机号和时间戳来产生用户的Openid
	var timestamp   = new Date().getTime();
	var msg         = String(phone) + String(timestamp);
	var md5         = crypto.createHash('md5');
	md5.update(msg);
	return md5.digest('hex');
};
