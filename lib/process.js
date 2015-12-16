var params = require('./params');

exports.order = function order(input, onResult) {

    console.log(input);
    console.log("---^");
    console.log(input.prices);

    if (!input.prices || !input.quantities || !input.names) {
      console.log("missing data", input.prices, input.quantities, input.names);
      onResult(null, {});
    } else {

       console.log("****");
       console.log(input.prices);
      var pl = input.prices.length;
      var ql = input.quantities.length;
      var nl = input.names.length;

      if ((pl != ql) || (ql != nl) || (pl != nl) ) {
            console.log("inconsistent data length", pl, ql, nl);
          onResult(null, {});
      } else {

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

          console.log(input.country, total, total_vat,discounted, vat );
          onResult(null, {total: discounted});
      }
      else {
        console.log("skipped");
        onResult(null, {});
      }
    }
    }


}
