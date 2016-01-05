angular.module('app.person', [])

.controller('PersonController', function ($scope, $http, $routeParams) {
  $scope.person = 'Someone\'s name';
  $http.get('js/students.json').success(function (data) {
    $scope.allStudents = data;
    $scope.studentId = $routeParams.itemId;
    $scope.student = data[$scope.studentId];
  });

});