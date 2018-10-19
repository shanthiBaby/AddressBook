var app  = angular.module("myapp",['ngRoute']);

app
.config(function($routeProvider) {
    $routeProvider
     .when('/dashboard', {
      templateUrl: 'app/DashBoard/DashBoardView.html',
      controller: 'DashBoardCtrl'
    })
     .when('/tableview', {
      templateUrl: 'app/TableView/TableView.html',
      controller: 'TableViewCtrl',
      controllerAs: 'vm'
    })
     .when('/cardsview', {
      templateUrl: 'app/CardsView/CardsView.html',
      controller: 'CardsViewCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo:'/dashboard'});
  });