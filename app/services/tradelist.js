fxTradingapp.service('trades', function() {
    this.tradelist = [];

    this.addTrade = function (trade) {
        trade.tradeNo = this.tradelist.length + 1;
        this.tradelist.push(trade);
    };

    this.getTrades = function () {
      return this.tradelist;
    };
});