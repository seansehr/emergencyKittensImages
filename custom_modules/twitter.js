/**
  Twitter Calls
*/

var twitter = require('twit'),
    consumerKey = 'OhajGDlT84v8fb8jLo7IEg',
    consumerSecret = 'zMqGDA4a0tvLmQeSMi5S1GFIPLR5fy7KsWlnPBpAA',
    token = '52487986-LJd9Dk7FlnvaEcSf84xwu2NN5M9z4K06BJ9AiMv9t',
    tokenSecret = 'mSG1RFxGf9LQ2gdGyld5yzHJcqbUUQy1YvfScQajk';

var T = new twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token: token,
  access_token_secret: tokenSecret
});

exports.restapi = function (path, query, callback) {
  T.get(path, query, function (err, reply) {
    if (err) console.log(err);
    callback(reply);
  });
};

exports.stream = function (path, query, twitterEvent, callback) {
  var stream = T.stream(path, query);

  stream.on(twitterEvent, function (tweet) {
    console.log(tweet);
    callback(tweet);
  });
};
