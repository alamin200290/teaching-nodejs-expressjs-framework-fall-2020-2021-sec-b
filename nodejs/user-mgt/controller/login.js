const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	res.render('login/index')
})

router.post('/', (req, res)=>{
	
	if(req.body.username == req.body.password){

		//req.session.uname =  req.body.username;

		res.cookie('uname', req.body.username);
		res.redirect('/home');		
	}else{
		res.redirect('/login');
	}
})

module.exports = router;