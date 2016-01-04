angular.module('app.list', [])

.controller('ListController', function ($scope) {
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