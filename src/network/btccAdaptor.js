var utils   = require('../util/utils');
var consts  = require('../util/consts');
var request = require('request');


var queryAllUrl = "https://data.btcchina.com/data/ticker?market=all";
var queryBtcUrl = "https://data.btcchina.com/data/ticker?market=btccny";
var queryLtcUrl = "https://data.btcchina.com/data/ticker?market=ltccny";

var BtccAdaptor = module.exports;

/*
 *  查询行情信息
 *  @callback   回调
 */
BtccAdaptor.getMarketInfo = function(callback) {
    request(queryAllUrl, function(err, res, body) {
        if(!!err) {
            callback(err, null);
        } else {
            var body = JSON.parse(body);
            var tickerBtc = null;
            var tickerLtc = null;

            if(!!body) {
                tickerBtc = body.ticker_btccny;
                tickerLtc = body.ticker_ltccny;
            }

            var btcInfo = {};
            if(!!tickerBtc) {
                btcInfo.key         = consts.TradeInfo_btcc_btc;
                btcInfo.coinType    = consts.CoinType_BitCoin;
                btcInfo.high        = tickerBtc.high;
                btcInfo.low         = tickerBtc.low;
                btcInfo.buy         = tickerBtc.buy;
                btcInfo.sell        = tickerBtc.sell;
                btcInfo.last        = tickerBtc.last;
                btcInfo.vol         = tickerBtc.vol;
                btcInfo.aver        = tickerBtc.vwap;
                btcInfo.stamp       = tickerBtc.date;
                btcInfo.preClose    = tickerBtc.prev_close;
                btcInfo.thisOpen    = tickerBtc.open;
            }

            var ltcInfo = {};
            if(!!tickerLtc) {
                ltcInfo.key         = consts.TradeInfo_btcc_ltc;
                ltcInfo.coinType    = consts.CoinType_LiteCoin;
                ltcInfo.high        = tickerLtc.high;
                ltcInfo.low         = tickerLtc.low;
                ltcInfo.buy         = tickerLtc.buy;
                ltcInfo.sell        = tickerLtc.sell;
                ltcInfo.last        = tickerLtc.last;
                ltcInfo.vol         = tickerLtc.vol;
                ltcInfo.aver        = tickerLtc.vwap;
                ltcInfo.stamp       = tickerLtc.date;
                ltcInfo.preClose    = tickerLtc.prev_close;
                ltcInfo.thisOpen    = tickerLtc.open;
            }

            callback(null, btcInfo, ltcInfo);
        }
    })
}
