/**
 * 前后端通信API文档
 */

urlPrefix  = "http://localhost:3000/"


/*************************************
 * 获取最新行情
 *************************************/
接口url:
    urlPrefix + "market/tradeInfo?coinType=" + coinType

协议说明：
    get

示例：
    "http://localhost:3000/market/tradeInfo?coinType=all"

参数：
    参数名      描述
    coinType    币种，可选值为: all|bitCoin|liteCoin|others，对应：全部币种|比特币|莱特币|其它币

返回值说明：
