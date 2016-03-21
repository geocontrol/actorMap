var express = require('express');
var router = express.Router();
// custom library
var config = require('../support/config');
var Model = require('../server/db/model'); // MySQL model

/* GET /relationships listing. */
router.get('/', function(req, res, next) {
	console.log('GET /relationships');
	new Model.Relationship().fetchAll().then(function(relationships){
		console.log(JSON.stringify(relationships));
		new Model.Actor().fetchAll().then(function(actors){
			console.log(JSON.stringify(actors));
				res.render('relationships', {title: 'Actor Mapping - Relationships', relationships: relationships.toJSON(), actors: actors.toJSON()});
			})
	}).catch(function(error) {
		console.log(error);
		res.send('an error occured');
	});
});

/* POST /relationships */
router.post('/', function(req, res, next) {
	console.log('POST /relationships');
	console.log(req.body);
	var newRelationship = new Model.Relationship({source_id: req.body.source, target_id: req.body.target, type: req.body.type});
	newRelationship.save().then(function(relationship){
		res.redirect('/relationships');
	});
});

module.exports = router;