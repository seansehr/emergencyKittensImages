
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('layout', { title: 'Emrgency Kitten Images' });
};

exports.partials = function (req, res) {
  console.log('part');
  var filename = req.params.filename;
  if (!filename) return;
  res.render('partials/' + filename);
};
