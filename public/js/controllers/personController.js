angular.module('app.person', [])

.controller('PersonController', function ($scope, $http, $routeParams) {
  $scope.person = 'Someone\'s name';
  $http.get('js/students.json').success(function (data) {
    $scope.allStudents = data;
    $scope.studentId = $routeParams.itemId;
    console.log($scope.studentId);
    $scope.student = data[$scope.studentId];
  });

  $scope.addFriend = function () {
    $http.post('/friends', {friendId: $scope.studentId}).success(function (data) {
      console.log('friend request sent.. ');
    });
  };

});