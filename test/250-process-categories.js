var expect = require('chai').expect;
var process = require('../lib/process');
var expected_result = {};

describe('process.categories(payload, callback)', function () {
  
  it('calls back with a 36-item table', function (done) {
      process.categories({}, function (err, result) {
      if (err) return done(err);
      expect(result).to.have.length(36);
      done();
    });
  });

});
