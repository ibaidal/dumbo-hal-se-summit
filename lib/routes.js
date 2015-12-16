var process = require('./process');

exports.order = function order(req, res, next) {
  process.order(req.body, function(unk, result) {
    res.json(result);
  });
};

exports.feedback = function feedback(req, res, next) {
  console.info("FEEDBACK:", req.body.type, req.body.content);
  next();
};