'use strict';

// Declare app level module which depends on views, and components
var fxTradingapp = angular.module('myApp', [
  'ngRoute']);

fxTradingapp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'TraddingAppOptionsController'
        })
        .when('/bookTrade', {
            templateUrl: 'pages/bookTrade.html',
            controller: 'BookTradeController'
        })
        .when('/listTrades', {
            templateUrl: 'pages/listTrades.html',
            controller: 'ListTradesController'
        })
        .when('/thankYou', {
            templateUrl: 'pages/thankYou.html'
            //controller: 'ThankYouController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

