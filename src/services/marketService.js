var utils   = require('../util/utils');
var consts  = require('../util/consts');
var request = require('request');
var BtccAdaptor     = require('../network/btccAdaptor');
var OkcoinAdaptor   = require('../network/okcoinAdaptor');

var MarketService = module.exports;
/*
 * 局部变量
 */
var kFreshInterval  = 5 * 1000; // 刷新间隔
var timerHandler    = null;     // 计时器
var tradeInfos     = {};       // 行情信息

MarketService.start = function() {    
    console.log("MarketService try to start...")

    // 初始化各币种行情
    tradeInfos[consts.CoinType_BitCoin]     = {};
    tradeInfos[consts.CoinType_LiteCoin]    = {};

    this.startQueryTimer(kFreshInterval);

    console.log("MarketService start success!")
}

/*
 * 启动定时查询行情计时器
 */
MarketService.startQueryTimer = function(interval) {
    timerHandler = setInterval(function() {
        console.log("Now send request to fresh market");
        console.log(tradeInfos);

        // btcc
        BtccAdaptor.getMarketInfo(function(err, btcInfo, ltcInfo) {
            if (!!err) {
                console.log("got error from btcc : ", err);
            } else {
                MarketService.recordTradeInfo(btcInfo);
                MarketService.recordTradeInfo(ltcInfo);
            }
        });

        // okcoin
        OkcoinAdaptor.getMarketInfo(function(err, info) {
            if (!!err) {
                console.log("got error from okcoin : ", err);
            } else {
                MarketService.recordTradeInfo(info);
            }
        });

    }, interval);
}

/*
 * 获得全部行情
 */
MarketService.getAllTradeInfo = function() {
    return tradeInfos;

}

/*
 * 获得特定币种行情
 */
MarketService.getTradeInfoByCoinType = function(coinType) {
    return tradeInfos[coinType];
}

/*
 * 记录行情
 */
MarketService.recordTradeInfo = function(tradeInfo) {
    if(!tradeInfo || !tradeInfo.key || !tradeInfo.coinType) {
        return;
    }

    var coinTrades  = tradeInfos[tradeInfo.coinType];
    var oldInfo     = coinTrades[tradeInfo.key];

    if(!!oldInfo) {
        if(oldInfo.stamp < tradeInfo.stamp) {
            // 由于网络传输的不确定性，必须验证时间戳，否则可能将老数据替换了新数据
            coinTrades[tradeInfo.key] = tradeInfo;
        }
    } else {
        coinTrades[tradeInfo.key] = tradeInfo;
    }
}
