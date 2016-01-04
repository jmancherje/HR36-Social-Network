angular.module('app', [])

// // add controller reference
.controller('list-controller', function ($scope) {
  $scope.people = [
    {
      "name":"John Doe",
      "location":"San Francisco, California",
      "info":"Likes to do stuff"
    },
    {
      "name":"Jane Someone",
      "location":"New York, New York",
      "info":"Hates to do stuff"
    }
  ]
});
// // add route provider