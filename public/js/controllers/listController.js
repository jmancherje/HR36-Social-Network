angular.module('app.list', ['ngAnimate'])

.controller('ListController', function ($scope, $http, $location) {
  $http.get('js/students.json').success(function (data) {
    $scope.students = data;
    $scope.allStudents = data;
  });


  $scope.user = sessionStorage.getItem('username');
  $scope.userId = sessionStorage.getItem('userId');

  $scope.reverse = function () {
    $scope.students = $scope.students.reverse();
  };

  $scope.filterByFriends = function () {
    var friends = [];
    for (var i=0; i<$scope.allStudents.length; i++) {
      if ($scope.friends.indexOf(i) > -1) {
        friends.push($scope.allStudents[i]);
      }
    }

    if ($scope.students.length === $scope.allStudents.length) {
      $scope.students = friends.slice();
    } else {
      $scope.students = $scope.allStudents.slice();
    }
  };

  $scope.login = function () {
    var newUser = {name: $scope.username}
    $http.post('/users', newUser)
    .then(function (res) {
      console.log(res.data);
      $scope.friends = res.data.friends;
      var friendsString = JSON.stringify($scope.friends);
      sessionStorage.setItem('username', $scope.username);
      sessionStorage.setItem('userId', res.data._id);
      sessionStorage.setItem('friends', friendsString)
      $scope.user = sessionStorage.getItem('username');
      $scope.userId = sessionStorage.getItem('userId');
      console.log('username stored in session as: ', $scope.user);
      console.log('userId stored in session as: ', $scope.userId);
      console.log('friends list stored in session as: ', $scope.friends);
    }, function () {
      console.log('error in posting to users');
    })
  };

  $scope.logout = function () {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('friends');
    // reset input box on template
    $scope.username = '';
    // session storage variables
    $scope.user = null;
    $scope.userId = null;
  };

});