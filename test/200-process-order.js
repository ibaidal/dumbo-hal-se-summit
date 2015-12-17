var expect = require('chai').expect;
var process = require('../lib/process');

describe('process.order(payload, callback)', function () {

  it('calls back with an empty object', function (done) {
      process.order({}, function (err, result) {
      if (err) return done(err);
      expect(result).to.deep.equal({});
      done();
    });
  });

  it('compute a simple request', function (done) {
    var body = { prices: [ 91.73 ],
                 quantities: [ 2 ],
                 names:
                  [ 'Tea' ],
                 country: 'HU',
                 reduction: 'STANDARD' };

    process.order(body, function (err, result) {
      if (err) return done(err);
      console.log("result:");
      console.log(result);
      expect(result.total).to.equal(232.9942);
      done();
    });
  });
});
