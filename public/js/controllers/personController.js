angular.module('app.person', [])

.controller('PersonController', function ($scope, $http, $routeParams) {
  $scope.person = 'Someone\'s name';
  $http.get('js/students.json').success(function (data) {
    $scope.allStudents = data;
    $scope.studentId = $routeParams.itemId;
    $scope.student = data[$scope.studentId];
  });

  $http.get('/comments').success(function (data) {
    console.log(data);
    $scope.comments = data.slice();
  });

  $scope.addFriend = function () {
//******* need to get friends from db on login as well. into session storage immediately

    // update or set friends onto session storage friends array
    var friends = sessionStorage.getItem('friends');
    console.log('getting session friends list: ', friends);
    
    if (friends) {
      console.log('adding to friends list..')
      friends = JSON.parse(friends);
      friends.push($scope.studentId);
    } else {
      console.log('creating friends list')
      friends = [$scope.studentId];
    }
    jsonFriends = JSON.stringify(friends);
    console.log(jsonFriends);
    sessionStorage.setItem('friends', jsonFriends);

    var data = {
      'friend':$scope.studentId,
      'currentUser':sessionStorage.getItem('username')
    }
    $http.post('/friends', data).success(function (data) {
      console.log('friend request sent.. ');
    });
  };

  $scope.isFriend = function () {
    // return boolean if is or is not friend
    var friends = sessionStorage.getItem('friends');
    if (!friends) {
      return false;
    } else if (typeof friends === 'string') {
      console.log(friends);
      friends = JSON.parse(friends);
      return friends.indexOf($scope.studentId) > -1;
    }
  };

  $scope.postMessage = function () {
    if ($scope.comment.length === 0) {
      return;
    }

    var user = sessionStorage.getItem('username');

    var newComment = {
      "commentingUser": user,
      "text": $scope.comment,
      "pageId": $scope.studentId
    };

    $http.post('/comments', newComment).success(function (data) {
      console.log($scope.studentId);
      console.log('successful post to comments');
      $http.get('/comments').success(function (data) {
        console.log(data);
        $scope.comments = data.slice();
      });
      $scope.comment = '';
    });
  };

});