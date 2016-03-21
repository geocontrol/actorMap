var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
//var Actor = require('../models/Actor.js');


/* GET /actors listing. */
router.get('/', function(req, res, next) {
	Actor.find(function (err, actors) {
		if (err) return next(err);
		res.json(actors);
	});
});

/* POST /actors */
router.post('/', function(req, res, next) {
	Actor.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* GET /actors/id */
router.get('/:id', function(req, res, next) {
	Actor.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* PUT /actors/:id */
router.put('/:id', function(req, res, next) {
	Actor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* DELETE /actors/:id */
router.delete('/:id', function(req, res, next) {
	Actor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return(err);
		res.json(post);
	});
});


module.exports = router;
