var reductions = {
	1000: 3,
	5000: 5,
	7000: 7,
	10000: 10,
	50000: 15
}

/**
 * Computes discount based on ammount and reduction model
 * @return discount (float) or null if something is messy
*/
exports.computeDiscount = function (ammount, model) {
	if (model === "STANDARD") {
		var highest = 0;
		for (var i in reductions) {
			if (ammount >= i && i > highest) {
				highest = i;
			}
		}
		return (reductions[highest]) ? reductions[highest]/100 : 0;
	} else {
		console.log("ERROR: INVALID REDUCTION MODEL = ", model);
		return null
	}
}