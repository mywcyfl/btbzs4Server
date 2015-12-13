var express         = require('express');
var utils           = require('../util/utils');
var router          = express.Router();
var MarketService   = require('../services/marketService');


/*
 * new user register. 
 * tradeInfo?coinType=***
 * coinType: all|btc|ltc|others
 */
router.get('/tradeInfo', function(req, res) {
	var msg         = req.query;
	msg.coinType    = String(msg.coinType).trim();
    
    var marketInfo = null;
    if ("all" == msg.coinType) {
        marketInfo = MarketService.getAllTradeInfo();
    } else {
        marketInfo = MarketService.getTradeInfoByCoinType(msg.coinType);
    }

    res.send(marketInfo) 
});

module.exports = router;
