const express 	= require('express');
const mysql 	= require('mysql');
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

	var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  user     : 'root',
	  password : '',
	  database : 'node1'
	});
	 
	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }	 
	  console.log('connected as id ' + connection.threadId);
	});

	var sql = "select * from user ";
	connection.query(sql, function (error, results) { 
		res.render('home/userlist', {userlist: results});
	});

	connection.end(function(err) {
		console.log('connection closed!');	  
	});
});

module.exports = router;