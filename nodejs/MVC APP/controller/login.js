const express 	= require('express');
const db		= require.main.require('./models/db');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index')
})

router.post('/', (req, res)=>{

	var sql = "select * from user where username='"+req.body.username+"' and password='"+req.body.password+"'";
	db.getResults(sql, function(results){
		if(results.length > 0 ){
			res.cookie('uname', req.body.username);
			res.redirect('/home');		
		}else{
			res.redirect('/login');
		}
	});
})

module.exports = router;