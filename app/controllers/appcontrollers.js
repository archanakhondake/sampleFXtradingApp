fxTradingapp.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.welcomeMessage = 'Foreign Exchange Trading App';
});

fxTradingapp.controller('TraddingAppOptionsController', function($scope,$location) {
    $scope.onExit = function () {

        if(confirm("Do you really want to exit?")) {
            $location.path("/thankYou");
        }
    };
});

fxTradingapp.controller('BookTradeController', function($scope, currencyrates, trades) {
    $scope.trade = {};
    $scope.trade.customerName = "";

    $scope.currencylist = currencyrates.getCurrencyList();

    $scope.calculateTotalAmout = function (transferAmount, rate) {
            return Number(transferAmount) * Number(rate);
    };

    $scope.bookTrade = function () {
        $scope.trade.totalAmount = $scope.calculateTotalAmout($scope.trade.transferAmount, $scope.trade.currencyRate);
        trades.addTrade($scope.trade);
      console.log($scope.trade);
        $scope.bookingDone = true;

    };
    $scope.onSelectCurrency = function () {
        console.log($scope.trade.currencyPair);
        let defaultRate = currencyrates.getDefaultRateFor($scope.trade.currencyPair);
        $scope.trade.currencyRate = defaultRate;
    };
});

fxTradingapp.controller('ListTradesController', function($scope, trades) {

    $scope.tradelist = trades.getTrades();
});