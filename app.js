
function countryOutput(countries) {
	for (var i = 0; i < countries.length; i++) {
		if (countries[i].name === process.argv[2]) {
			console.log("Country: " + countries[i].name);
			console.log("Top Level Domain: " + countries[i].topLevelDomain);
		}
	}
}

var fileReader = require('./json-file-reader.js');

fileReader.countryInfo('./countries.json', countryOutput);


/*
 function countryOutput(countries) {
 	content.forEach(countries) {
 		if(countries === process.argv[2]) {
 			console.log("Country: " + countries[i].name);
			console.log("Top Level Domain: " + countries[i].topLevelDomain);
 		}
 	}
 }
 */







