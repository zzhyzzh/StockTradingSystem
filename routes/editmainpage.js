var express = require('express');
var router = express.Router();
var User = require("../models/user.js");

/* GET home page. */
router.get('/', function(req, res) {
	var login = new User({
		username : 'lianyuzhe',
		password : 'lyz.637631'
	});
	login.userInfo(function(err,result){
		res.render('mainpage', {data: result});

	});
  
});

module.exports = router;