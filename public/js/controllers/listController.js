angular.module('app.list', ['ngAnimate'])

.controller('ListController', function ($scope, $http) {
  $http.get('js/students.json').success(function (data) {
    $scope.students = data;
  });

  $scope.user = sessionStorage.getItem('username');

  $scope.login = function () {
    $http.post('/users', $scope.username)
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
    $scope.user = null;
  };

});