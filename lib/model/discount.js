/**
 * Computes discount based on ammount and reduction model
 * @return discount (float) or null if something is messy
 */
exports.computeDiscount = function(ammount, model) {
	switch(model) {
		case 'STANDARD':
			if (ammount >= 50000) return 0.15;
			if (ammount >= 10000) return 0.10;
			if (ammount >= 7000)  return 0.07;
			if (ammount >= 5000)  return 0.05;
			if (ammount >= 1000)  return 0.03;
			return 0;

		default:
			console.log("ERROR: INVALID REDUCTION MODEL = ", model);
			return null;
	}
};