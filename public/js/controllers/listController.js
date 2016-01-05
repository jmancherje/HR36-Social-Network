angular.module('app.list', ['ngAnimate'])

.controller('ListController', function ($scope, $http) {
  $http.get('js/students.json').success(function (data) {
    $scope.students = data;
  });

});