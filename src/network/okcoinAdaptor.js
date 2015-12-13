var utils   = require('../util/utils');
var consts  = require('../util/consts');
var request = require('request');

var okCnQueryBtc    = "https://www.okcoin.cn/api/v1/ticker.do?symbol=btc_cny";
var okCnQueryLtc    = "https://www.okcoin.cn/api/v1/ticker.do?symbol=ltc_cny";
var okComQueryBtc   = "https://www.okcoin.com/api/v1/ticker.do?symbol=btc_usd";
var okComQueryLtc   = "https://www.okcoin.com/api/v1/ticker.do?symbol=ltc_usd";
var okComQueryHYBtc = "https://www.okcoin.com/api/v1/future_ticker.do?symbol=btc_usd&contract_type=this_week";
var okComQueryHYLtc = "https://www.okcoin.com/api/v1/future_ticker.do?symbol=ltc_usd&contract_type=this_week";

var OkcoinAdaptor = module.exports;

/*
 *  查询行情信息
 *  @callback   回调
 */
OkcoinAdaptor.getMarketInfo = function(callback) {
    // [step 1] 查询比特币行情
    request(okCnQueryBtc, function(err, res, body) {
        if(!!err) {
            callback(err, null);
        } else {
            var body    = JSON.parse(body);
            var ticker  = null;
            var stamp   = null;

            if(!!body) {
                ticker = body.ticker;
                stamp  = body.date;
            }

            var tradeInfo = {};
            if(!!ticker && !!stamp) {
                tradeInfo.key         = consts.TradeInfo_okCn_btc;
                tradeInfo.coinType    = consts.CoinType_BitCoin;
                tradeInfo.high        = ticker.high;
                tradeInfo.low         = ticker.low;
                tradeInfo.buy         = ticker.buy;
                tradeInfo.sell        = ticker.sell;
                tradeInfo.last        = ticker.last;
                tradeInfo.vol         = ticker.vol;
                tradeInfo.stamp       = stamp;
            }

            callback(null, tradeInfo);
        }
    })

    // [step 2] 查询莱特币行情
    request(okCnQueryLtc, function(err, res, body) {
        if(!!err) {
            callback(err, null);
        } else {
            var body    = JSON.parse(body);
            var ticker  = null;
            var stamp   = null;

            if(!!body) {
                ticker = body.ticker;
                stamp  = body.date;
            }

            var tradeInfo = {};
            if(!!ticker && !!stamp) {
                tradeInfo.key         = consts.TradeInfo_okCn_ltc;
                tradeInfo.coinType    = consts.CoinType_LiteCoin;
                tradeInfo.high        = ticker.high;
                tradeInfo.low         = ticker.low;
                tradeInfo.buy         = ticker.buy;
                tradeInfo.sell        = ticker.sell;
                tradeInfo.last        = ticker.last;
                tradeInfo.vol         = ticker.vol;
                tradeInfo.stamp       = stamp;
            }

            callback(null, tradeInfo);
        }
    })

    // [step 3] 查询国际站比特币行情
    request(okComQueryBtc, function(err, res, body) {
        if(!!err) {
            callback(err, null);
        } else {
            var body    = JSON.parse(body);
            var ticker  = null;
            var stamp   = null;

            if(!!body) {
                ticker = body.ticker;
                stamp  = body.date;
            }

            var tradeInfo = {};
            if(!!ticker && !!stamp) {
                tradeInfo.key         = consts.TradeInfo_okCom_btc;
                tradeInfo.coinType    = consts.CoinType_BitCoin;
                tradeInfo.high        = ticker.high;
                tradeInfo.low         = ticker.low;
                tradeInfo.buy         = ticker.buy;
                tradeInfo.sell        = ticker.sell;
                tradeInfo.last        = ticker.last;
                tradeInfo.vol         = ticker.vol;
                tradeInfo.stamp       = stamp;
            }

            callback(null, tradeInfo);
        }
    })

    // [step 4] 查询国际站莱特币行情
    request(okComQueryLtc, function(err, res, body) {
        if(!!err) {
            callback(err, null);
        } else {
            var body    = JSON.parse(body);
            var ticker  = null;
            var stamp   = null;

            if(!!body) {
                ticker = body.ticker;
                stamp  = body.date;
            }

            var tradeInfo = {};
            if(!!ticker && !!stamp) {
                tradeInfo.key         = consts.TradeInfo_okCom_ltc;
                tradeInfo.coinType    = consts.CoinType_LiteCoin;
                tradeInfo.high        = ticker.high;
                tradeInfo.low         = ticker.low;
                tradeInfo.buy         = ticker.buy;
                tradeInfo.sell        = ticker.sell;
                tradeInfo.last        = ticker.last;
                tradeInfo.vol         = ticker.vol;
                tradeInfo.stamp       = stamp;
            }

            callback(null, tradeInfo);
        }
    })

    // [step 5] 查询国际站合约比特币行情
    request(okComQueryHYBtc, function(err, res, body) {
        if(!!err) {
            callback(err, null);
        } else {
            var body    = JSON.parse(body);
            var ticker  = null;
            var stamp   = null;

            if(!!body) {
                ticker = body.ticker;
                stamp  = body.date;
            }

            var tradeInfo = {};
            if(!!ticker && !!stamp) {
                tradeInfo.key         = consts.TradeInfo_okCom_hy_btc;
                tradeInfo.coinType    = consts.CoinType_BitCoin;
                tradeInfo.high        = ticker.high;
                tradeInfo.low         = ticker.low;
                tradeInfo.buy         = ticker.buy;
                tradeInfo.sell        = ticker.sell;
                tradeInfo.last        = ticker.last;
                tradeInfo.vol         = ticker.vol;
                tradeInfo.stamp       = stamp;
            }

            callback(null, tradeInfo);
        }
    })

    // [step 6] 查询国际站合约莱特币行情
    request(okComQueryHYLtc, function(err, res, body) {
        if(!!err) {
            callback(err, null);
        } else {
            var body    = JSON.parse(body);
            var ticker  = null;
            var stamp   = null;

            if(!!body) {
                ticker = body.ticker;
                stamp  = body.date;
            }

            var tradeInfo = {};
            if(!!ticker && !!stamp) {
                tradeInfo.key         = consts.TradeInfo_okCom_hy_ltc;
                tradeInfo.coinType    = consts.CoinType_LiteCoin;
                tradeInfo.high        = ticker.high;
                tradeInfo.low         = ticker.low;
                tradeInfo.buy         = ticker.buy;
                tradeInfo.sell        = ticker.sell;
                tradeInfo.last        = ticker.last;
                tradeInfo.vol         = ticker.vol;
                tradeInfo.stamp       = stamp;
            }

            callback(null, tradeInfo);
        }
    })
}
