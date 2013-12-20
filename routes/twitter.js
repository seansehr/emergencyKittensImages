
/*
 * GET twitter api.
 */

twitter = require('../custom_modules/twitter');

exports.restapi = {
  get: function (req, res) {
    twitter.restapi(req.route.params[0], req.query, function (results) {
      res.json(results);
    });
  }
};
