var express = require('express');
var router = express.Router();

// custom library
var config = require('../support/config');
var Model = require('../server/db/model'); // MySQL model

/* GET /ractors listing. */
router.get('/', function(req, res, next) {
	console.log('GET /ractors/index');
	new Model.Actor().fetchAll().then(function(actors){
		console.log(JSON.stringify(actors));
		res.render('actors', {title: 'Actor Mapping - Actors', actors: actors.toJSON()});
	}).catch(function(error) {
		console.log(error);
		res.send('an error occured');
	});
});

/* POST /actors */
router.post('/', function(req, res, next) {
	console.log('POST /ractors');
	console.log(req.body);
	var newActor = new Model.Actor({name: req.body.name, scale: req.body.scale});
	newActor.save().then(function(actor){
		res.redirect('/ractors');
	});
});

/* GET /actors/id 
router.get('/:id', function(req, res, next) {
	Actor.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* PUT /actors/:id 
router.put('/:id', function(req, res, next) {
	Actor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* DELETE /actors/:id 
router.delete('/:id', function(req, res, next) {
	Actor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return(err);
		res.json(post);
	});
});

*/

module.exports = router;
