const express = require('express');
const router = express.Router();

router.get('/create', (req, res)=>{
	res.render('user/create'); 
})


router.post('/create', (req, res)=>{

	//req.body.username
	//req.body.password
	//req.body.email
	//req.body.dept

	//res.send('posted');
	res.redirect('/home/userlist'); 
})


router.get('/edit/:id', (req, res)=>{

	//var data = req.params.id;
	//res.send(data);

	res.redirect('/home/userlist');
})


module.exports = router;