var express = require('express');
var router = express.Router();
var Record = require("../models/record.js");

router.get('/', function(req, res, next) {
	var username = req.session.admin.username;
	res.render('tradeManage_stock', {username:username, errMsg:'',data:''});		
});

router.post('/', function(req, res) {
	var user = req.session.admin;	
	if(user.type == "low")
		res.render('tradeManage_stock', {username:req.session.admin.username,errMsg:'权限不足，无法查看',data:''});	
	else
	{
		var stock_id = req.body.stock_id;	
		console.log(stock_id + ' in function');
		var trans = new Record({
			code : stock_id
		});
		trans.TransListByCode(trans.code, function(err,result){
			if(err){
				res.render('tradeManage_stock', {username:req.session.admin.username,errMsg:""});
				return;
			}
			else{
				res.render('tradeManage_stock', {username:req.session.admin.username,errMsg:"",data:result});
				return;
			}
		});	
	}
});

module.exports = router;
