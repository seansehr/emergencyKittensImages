var app = angular.module('emergencyKitten', ['wu.masonry']);

//This configures the routes and associates each route with a view and a controller
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'imageController',
      templateUrl: '/partials/index.jade'
    });
}]);
