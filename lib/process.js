var model = require('./model');

function computeTotal(order) {
    // basic sanity check
    if (!order.prices || !order.quantities || !order.country || !order.reduction) {
        console.log('ERROR: MISSING ONE OR SEVERAL PARAMETERS', order);
        return {};
    }

    // check arrays length
    var count = order.prices.length;
    if (order.prices.length !== order.quantities.length) {
        console.log('ERROR: NOT SAME NUMBER OF PRICES & QUANTITIES');
        return {};
    }

    // retrieve & check VAT
    var vat = model.computeVAT(order.country);
    if (vat === null) {
        console.log('ERROR: CANNOT FIND VAT FOR COUNTRY: ', order.country);
        return {};
    }

    // compute total before tax
    var total = 0;
    for(var idx = 0; idx < count; idx ++) {
      total += order.prices[idx] * order.quantities[idx];
    }

    // add VAT
    var total_vat = total * ( 1 + vat);

    // retrieve & check discount
    var discount = model.computeDiscount(total_vat, order.reduction);
    if (discount === null) return {};

    // compute final price
    var discounted = total_vat * (1 - discount);

    // log for clarity and debug purpose
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

exports.order = function order(input, onResult) {
    onResult(null, computeTotal(input));
};