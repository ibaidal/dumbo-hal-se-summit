var params = require('./params');

function computeTotal(order) {
    // basic sanity check
    if (order.prices && order.quantities && order.country && order.reduction) {
        // additional check
        var count = order.prices.length;
        if (order.prices.length !== order.quantities.length) {
            console.log('ERROR: NOT SAME NUMBER OF PRICES & QUANTITIES');
            return {};
        }

        var vat = params.vat[order.country];
        if (vat === null) {
            console.log('ERROR: CANNOT FIND VAT FOR COUNTRY: ', order.country);
            return {};
        }

        var total = 0;
        for(var idx = 0; idx < count; idx ++) {
          total += order.prices[idx] * order.quantities[idx];
        }

        var total_vat = total * ( 1 + vat);

        var discount = params.discount(total_vat, order.reduction);
        if (discount === null) {
            console.log('ERROR: INVALID DISCOUNT MODEL');
            return {};
        }

        var discounted = total_vat * (1 - discount);

        var audit = {
            count: count,
            total: total,
            vat: vat,
            total_vat: total_vat,
            discount: discount,
            discounted: discounted
        };
        console.log(audit);

        return {total: discounted};
    }
    else {
      console.log('ERROR: MISSING ONE OR SEVERAL PARAMETERS');
      return {};
    }    
}

exports.order = function order(input, onResult) {
    onResult(null, computeTotal(input));
};