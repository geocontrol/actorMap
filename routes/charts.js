var express = require('express');
var router = express.Router();
// custom library
var config = require('../support/config');
var Model = require('../server/db/model'); // MySQL model

/* GET /chart listing. */
router.get('/', function(req, res, next) {
	console.log('GET /chart');
	new Model.Relationship().fetchAll().then(function(relationships){
		console.log(JSON.stringify(relationships));
			res.send(relationships.toJSON());
	}).catch(function(error) {
		console.log(error);
		res.send('an error occured');
	});
});

module.exports = router;