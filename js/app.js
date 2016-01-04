angular.module('app', ['app.list', 'ngRoute'])

// add route provider

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: '/templates/list.html',
      controller: 'ListController'
    })
    .when('/person', {
      templateUrl: '/templates/person.html',
      controller: 'PersonController'
    })
    .otherwise('/links');
});