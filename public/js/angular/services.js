app.service('timeline', function ($http) {
  this.getTweets = function (params, callback) {
	params.screen_name = 'EmrgencyKittens';
	if (params.count === undefined) params.count = 50;
    $http.get('/twitter/statuses/user_timeline', {'params': params}).success(function (data) {
      callback(data);
    });
  };
});
