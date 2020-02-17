var express = require('express');
var router = express.Router();
var jsonFile = require('./db.json');


router.get('/', function (req, res, next) {
	res.json(jsonFile);
});


module.exports = router;

