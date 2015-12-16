exports.vat = {
	"DE": 0.20,
	"UK": 0.21,
	"FR": 0.20,
	"IT": 0.25,
	"ES": 0.19,
	"PL": 0.21,
	"RO": 0.20,
	"NL": 0.24,
	"EL": 0.20,
	"CZ": 0.19,
	"PT": 0.23,
	"HU": 0.27,
	"SE": 0.23,
	"AT": 0.22,
	"BG": 0.21,
	"DK": 0.21,
	"FI": 0.17,
	"SK": 0.18,
	"IE": 0.21,
	"HR": 0.23,
	"LT": 0.23,
	"SI": 0.24,
	"LV": 0.20,
	"EE": 0.22,
	"CY": 0.21,
	"LU": 0.25,
	"MT": 0.20
};

exports.discount = function(ammount, model) {
	switch(model) {
		case 'STANDARD':
			if (ammount > 50000) return 0.15;
			if (ammount > 10000) return 0.10;
			if (ammount > 7000)  return 0.07;
			if (ammount > 5000)  return 0.05;
			if (ammount > 1000)  return 0.03;
			return 0;

		default:
			console.log("ERROR: INVALID REDUCTION MODEL = ", model);
			return null;
	}
};

exports.discounted = function(ammount, model) {
	discount = exports.discount(ammount, model);
	if (discount === null) return null;

	return ammount * (1 - discount);
};