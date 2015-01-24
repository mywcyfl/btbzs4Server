/**
 * 存放一些全局性的函数
 */
var crypto = require('crypto');

var utils = module.exports;

utils.createOpenid = function(phone){
	var timestamp = new Date().getTime();
	var msg = String(phone) + String(timestamp);
	// 利用手机号和时间戳来产生用户的Openid
	var md5 = crypto.createHash('md5');
	md5.update(msg);
	return md5.digest('hex');
};
