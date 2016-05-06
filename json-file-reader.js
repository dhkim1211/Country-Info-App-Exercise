var fs = require('fs');

var content;

function countryInfo(file, callback){
	fs.readFile(file, 'utf-8', function(err, data){
		if (err) {
			throw err;
		}
		content = JSON.parse(data);
		callback(content);
	})
}

module.exports.countryInfo = countryInfo;