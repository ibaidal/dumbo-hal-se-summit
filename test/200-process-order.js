var expect = require('chai').expect;
var process = require('../lib/process');

describe('process.order(payload, callback)', function () {
  it('calls back with an empty object', function (done) {
      process.order({}, function (err, result) {
      if (err) return done(err);
      expect(result).to.deep.equal({});
      done();
    })
  })

 it('must not process non STANDARD rate', function (done) {
      var body = { prices: [ 91.73 ],
                   quantities: [ 2 ],
                   names:
                    [ 'Tea',
                      'Glove',
                      'Worms',
                      'Water',
                      'Carrot',
                      'Jacket',
                      'Stinking cheese',
                      'Net' ],
                   country: 'HU',
                   reduction: 'STRANGE' };

      process.order(body, function (err, result) {
        if (err) return done(err);
        expect(result).to.deep.equal({  });
        done();
      })
  })

 it('must check if prices / quantities / names are defined', function (done) {
      var body = { prices: [ 91.73 ],
                   quantities: [ 2, 3 ],
                   country: 'HU',
                   reduction: 'STANDARD' };

      process.order(body, function (err, result) {
        if (err) return done(err);
        expect(result).to.deep.equal({  });
        done();
      })
  })


 it('must check if prices / quantities / names have the same size', function (done) {
      var body = { prices: [ 91.73 ],
                   quantities: [ 2, 3 ],
                   names:
                    [ 'Tea',
                      'Glove',
                      'Worms',
                      'Water',
                      'Carrot',
                      'Jacket',
                      'Stinking cheese',
                      'Net' ],
                   country: 'HU',
                   reduction: 'STANDARD' };

      process.order(body, function (err, result) {
        if (err) return done(err);
        expect(result).to.deep.equal({  });
        done();
      })
  })

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
      })
   })

   it('check if prices are negative', function (done) {
      var body = { prices: [ 91.73, -10.0 ],
                   quantities: [ 2, 3 ],
                   names:
                    [ 'Tea',
                      'Glove'],
                   country: 'HU',
                   reduction: 'STANDARD' };

      process.order(body, function (err, result) {
        if (err) return done(err);
        expect(result).to.deep.equal({  });
        done();
      })
    })

    it('check if quantities are negative', function (done) {
       var body = { prices: [ 91.73, 10.0, 2.38 ],
                    quantities: [ 2, 3, -1 ],
                    names:
                     [ 'Tea',
                       'Glove',
                       'Worms'],
                    country: 'HU',
                    reduction: 'STANDARD' };

       process.order(body, function (err, result) {
         if (err) return done(err);
         expect(result).to.deep.equal({  });
         done();
      })
    })
})
