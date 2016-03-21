var bookshelf = require('./db');

var Actor = bookshelf.Model.extend({
	tableName: 'actors',
	idAttribute: 'id',	
});

var Asset = bookshelf.Model.extend({
	tableName: 'assets',
	idAttribute: 'id',	
});

var Relationship = bookshelf.Model.extend({
	tableName: 'relationships',
	idAttribute: 'id',
});

module.exports = {
	Actor: Actor,
	Asset: Asset,
	Relationship: Relationship
};