const Sequelize = require('sequelize');
const	constants = require('./constants');

const poolInstance = new Sequelize(constants.db.database, constants.db.username, constants.db.password, {
	host: constants.db.host,
	dialect: 'postgres',
	logging: false,
	pool: {
		max: 20,
		min: 5,
		idle: 10000
	}
});

poolInstance.sync().then(function(){
	console.log('DB connection sucessful.');
}, function(err){
	// catch error here
	console.log(err);

});

module.exports = poolInstance;

