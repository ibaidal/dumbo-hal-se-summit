/**
 * Standard VAT table per country
 */
var vat_table = {
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

/**
 * Computes VAT based on country name
 * @return VAT (float) or null if country is unknown
 */
 exports.computeVAT = function(country) {
	var vat = vat_table[country];
	if (vat !== undefined) return vat;

	console.log('ERROR: INVALID COUNTRY = ', country);
	return null;
};