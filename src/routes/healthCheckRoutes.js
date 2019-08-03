'use strict';

module.exports = (app) => {
	const path = require('path');
	const controller = require(path.resolve('src/controllers/healthCheckController'));
	const router = require('express').Router();

	router.get('/api/healthCheck', controller.checkHealth);

	app.use(router);
};
