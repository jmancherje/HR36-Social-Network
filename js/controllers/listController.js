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
    },
    {
      "name":"Mutton Padre",
      "location":"London, England",
      "info":"Dresses up dogs like horses"
    },
    {
      "name":"Jaramiah Wilson",
      "location":"Aukland, New Zealand",
      "info":"A wizard on the weekends"
    },
    {
      "name":"Sir Francis Columbo",
      "location":"Madrid, Spain",
      "info":"Likes to explore on boats"
    },
  ]
});