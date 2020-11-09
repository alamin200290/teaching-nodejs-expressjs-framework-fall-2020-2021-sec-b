const express 	= require('express');
const mysql 	= require('mysql');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index')
})

router.post('/', (req, res)=>{
	
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

	var sql = "select * from user where username='"+req.body.username+"' and password='"+req.body.password+"'";
	//var sql = "select * from user ";

	connection.query(sql, function (error, results) { 
	  	if(results.length > 0 ){
			res.cookie('uname', req.body.username);
			res.redirect('/home');		
		}else{
			res.redirect('/login');
		}
	});

	connection.end(function(err) {
		console.log('connection closed!');	  
	});

})

module.exports = router;