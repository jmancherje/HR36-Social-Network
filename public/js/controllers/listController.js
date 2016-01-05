angular.module('app.list', ['ngAnimate'])

.controller('ListController', function ($scope, $http, $location) {
  $http.get('js/students.json').success(function (data) {
    $scope.students = data;
  });

  $scope.user = sessionStorage.getItem('username');

  $scope.reverse = function () {
    $scope.students = $scope.students.reverse();
  };

  $scope.login = function () {
    var newUser = {name: $scope.username}
    $http.post('/users', newUser)
    .then(function (res) {
      sessionStorage.setItem('username', $scope.username);
      $scope.user = sessionStorage.getItem('username');
      console.log('username stored in session ');
    }, function () {
      console.log('error in posting to users');
    })
  };

  $scope.logout = function () {
    sessionStorage.removeItem('username');
    $scope.username = '';
    $scope.user = null;
  };

  $scope.redirect = function (index) {
    console.log('/#/person/' + index);
    $location.path('/#/person/' + index);
  }

});