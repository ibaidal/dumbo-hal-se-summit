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
         /*prices: [ 34.87 ],
          quantities: [ 9 ],
          names: [ 'Tomato juice' ],
          country: 'PL',
          reduction: 'STANDARD' }*/
        console.log("tstrtisternauter");
        onResult(null, {prices: total});
    }
    else {
      console.log("skipped");
      onResult(null, {});
    }


}
