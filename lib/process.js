var params = require('./params');

exports.order = function order(input, onResult) {

    console.log(input);
    console.log("---^");
    console.log(input.prices);

    if (input.prices && input.reduction === 'STANDARD') {
        var count = input.prices.length;

        console.log("computing price");
        var total = 0;
        for(var idx = 0; idx < count; idx ++) {
          total += input.prices[idx] * input.quantities[idx];
        }

        var vat = params.vat[input.country];
        var total_vat = total *( 1 + vat);
        var discounted = params.discounted(total_vat, input.reduction);
         /*prices: [ 34.87 ],
          quantities: [ 9 ],
          names: [ 'Tomato juice' ],
          country: 'PL',
          reduction: 'STANDARD' }*/

        console.log(input.country, total, total_vat,discounted, vat );
        onResult(null, {total: discounted});
    }
    else {
      console.log("skipped");
      onResult(null, {});
    }


}
