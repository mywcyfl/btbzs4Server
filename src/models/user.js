var utils = require('../util/utils');

/**
 * user类，也即用户账户的抽象结构体
 */
function User(opts){
	// 手机号
	this.phone          = opts.phone;
	// 密码
	this.pwd            = opts.pwd;
	// openid
	this.openid         = opts.openid || utils.createOpenid(opts.phone);
	// 姓名
	this.name           = opts.name;
	// 注册时间
	this.regTime        = opts.regTime || Date.now();
	// 上次登陆时间
	this.lastLoginTime  = opts.lastLoginTime || Date.now();
	// 性别（1:男，2:女）
	this.gender         = opts.gender || 1;
	// 生日
	this.birthday       = opts.birthday;
}

module.exports = User;

/**
 * 客户端需要的数据JSON化
 */
User.prototype.clientInfoToJson = function(){
	var data = {};
	data['phone'] 		= this.phone;
	data['openid'] 		= this.openid;
	data['name'] 		= this.name;
	data['gender'] 		= this.gender;
	data['birthday'] 	= this.birthday;

	return data;
};
