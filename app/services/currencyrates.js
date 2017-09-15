fxTradingapp.service('currencyrates', function() {
    this.currencies = {
        "USDINR" : 66.0,
        "EURINR" : 86.0
    };

    this.getCurrencyList = function () {
        return Object.keys(this.currencies);
    };

    this.getDefaultRateFor = function (currency) {
        return this.currencies[currency];
    };
});