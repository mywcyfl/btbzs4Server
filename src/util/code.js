/**
 * define code used to communicate with client
 */
module.exports = {
	/**
	 * 成功，操作成功可以直接返回1000即可
	 */	
	OK : 1000,

	/* 
	 * 错误区，为方便前后端调试，之类可以针对不同错误返回不同错误码
	 */
	ERR_INVALID_PARAMETERS: 2000,	// 参数错误
	ERR_USER_ALREADY_EXISTS: 2001,	// 注册时发现该手机号已注册
	ERR_CREATE_IN_DB_FAILED: 2002,	// 注册失败，数据库创建未能成功
	ERR_USER_DO_NOT_EXISTS: 2003,	// 登陆失败，用户不存在
	ERR_WRONG_PASSWORD: 	2004,	// 登陆失败，密码错误
};
