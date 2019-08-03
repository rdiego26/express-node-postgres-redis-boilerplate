'use strict';

const path = require('path');
const HTTP_STATUS = require('http-status-codes');
const appData = require(path.resolve('package.json'));

module.exports = {
	checkHealth: (req, res) => {
		res
			.status(HTTP_STATUS.OK)
			.json({
				result: 'I am alive!',
				version: appData.version,
				name: appData.name
			});
	},
};
