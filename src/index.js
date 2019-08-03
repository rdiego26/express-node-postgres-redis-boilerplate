'use strict';

const http = require('http');
const path = require('path');
const express = require('express');
const helmet = require('helmet')();
const bodyParser = require('body-parser');
const compression = require('compression');

const constants = require(path.resolve('src/utils/constants'));

const healthCheckRoutes = require(path.resolve('src/routes/healthCheckRoutes'));

const app = express();
app.set('port', constants.server.port);
app.set('title', constants.app.name);

app.use(helmet);
app.use(bodyParser.json());
app.use(compression());

healthCheckRoutes(app);


http.createServer(app).listen(app.get('port'), () => {
	console.info('%s listening on port %d', app.get('title'), app.get('port'));
});

module.exports = app;
