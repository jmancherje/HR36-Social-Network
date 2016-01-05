angular.module('app', ['app.list', 'app.person', 'ngRoute', 'ngAnimate'])

// routing:
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: './js/templates/list.html',
      controller: 'ListController'
    })
    .when('/person/:itemId', {
      templateUrl: './js/templates/person.html',
      controller: 'PersonController'
    })
    .otherwise('/list');
});