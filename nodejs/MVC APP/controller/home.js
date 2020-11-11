const express 	= require('express');
const db 		= require.main.require('./models/db');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	//req.session.uname != null
	if(req.cookies['uname'] != null){
		res.render('home/index');
	}else{
		res.redirect('/login');
	}
})


router.get('/userlist', (req, res)=>{

	var sql = "select * from user ";
	db.getResults(sql, function(results){
		res.render('home/userlist', {userlist: results});
	});
});

module.exports = router;