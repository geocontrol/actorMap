var config = require('../../support/config');

console.log("DB Username: " + config.mysql.user);

var knex = require('knex')({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: config.mysql.user,
		password: config.mysql.password,
		database: 'actorMap',
		charset: 'utf8'
	}
});

//var Bookshelf = require('bookshelf')(knex);

module.exports = require('bookshelf')(knex);