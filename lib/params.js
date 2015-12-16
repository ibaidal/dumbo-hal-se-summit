exports.vat = {
"DE": .20,
"UK": .21,
"FR": .20,
"IT": .25,
"ES": .19,
"PL": .21,
"RO": .20,
"NL": .20,
"BE": .24,
"EL": .20,
"CZ": .19,
"PT": .23,
"HU": .27,
"SE": .23,
"AT": .22,
"BG": .21,
"DK": .21,
"FI": .17,
"SK": .18,
"IE": .21,
"HR": .23,
"LT": .23,
"SI": .24,
"LV": .20,
"EE": .22,
"CY": .21,
"LU": .25,
"MT": .20  }

exports.discounted = function(ammount, model) {
	if (model !== "STANDARD") {

		if (ammount > 50000) return ammount * (1 - .15);
		if (ammount > 10000) return ammount * (1 - .10);
		if (ammount > 7000)  return ammount *  (1 - .07);
		if (ammount > 5000)  return ammount *  (1 - .05);
		if (ammount > 1000)  return ammount *  (1 - .03);

		return ammout;
	}

	return null;
}

console.log('X', exports.discounted(12000, "FOO"));
console.log('X', exports.discounted(12000, "STANDARD"));;