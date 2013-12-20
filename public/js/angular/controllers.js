app.controller('mainController', function ($scope, $route, $routeParams, $location, timeline) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
  $scope.timeline = timeline;
  $scope.images = [];
});

app.controller('imageController', function ($scope) {
  pullImage = function (tweet) {
    if (tweet.entities.media !== undefined) {
      $.each(tweet.entities.media, function (i,v) {
        media = tweet.entities.media[i];
        if (media.type == 'photo') {
          $scope.images.push(media.media_url);
        }
      });
    }
  };

	$scope.timeline.getTweets({}, function (data) {
    $.each(data, function (i, v) {
      pullImage(v);
    });
  });
});