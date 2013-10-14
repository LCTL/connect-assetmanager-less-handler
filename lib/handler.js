/*!
 * Less css handler for connect-assetmanager
 *
 * Copyright(c) 2013 Lawrence Cheung <lawrence0819@gmail.com>
 * MIT Licensed
 *
 */

var less = require('less');

module.exports = function (file, path, index, isLast, callback) {

	var lastIndexOfSlash = path.lastIndexOf("/");
	var paths = path.substring(0, lastIndexOfSlash == -1 ? path.length() : lastIndexOfSlash);

	var parser = new less.Parser({

		paths: paths

	});

	parser.parse(file, function (err, tree) {

		if (err){

			console.error(err);

		} else {

			callback(tree.toCSS());

		}
		
	});

};