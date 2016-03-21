var express = require('express');
var router = express.Router();

// custom library
var config = require('../support/config');
// model
var Model = require('../server/db/model');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('GET home page');
	res.render('index', { title: 'Actor Mapping' });
});

module.exports = router;
