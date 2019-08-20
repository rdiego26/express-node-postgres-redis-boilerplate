const path = require('path');
const connection = require(path.resolve('src/utils/poolConnection'));
const model = require(path.resolve('src/models/configItemModel'))(connection);

const dao = {

	create: async (item) => {

		return model
			.create(item);
	},

	findByKey: async (key) => {
		let query = {
			key
		};

		return model
			.scope('find')
			.findOne({
			where: query
		});
	}

};

module.exports = dao;