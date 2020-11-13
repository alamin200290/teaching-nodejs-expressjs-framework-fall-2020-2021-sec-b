const express = require('express');
const userModel	= require.main.require('./models/userModel');
const router = express.Router();

router.get('/create', (req, res)=>{
	res.render('user/create'); 
})

router.post('/create', (req, res)=>{

	var user = {
		username: 	req.body.username,
		password: 	req.body.password,
		type	: 	req.body.type
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('user/create');
		}
	});
})


router.get('/edit/:id', (req, res)=>{

	//var data = req.params.id;
	//res.send(data);
	var user ={
		id: req.params.id,
		username: 'alamin',
		password: '123',
		email: 'alamin@gmail.com',
		dept: 'CS'
	};

	res.render('user/edit', user);
})


router.post('/edit/:id', (req, res)=>{

	//req.body.username
	//req.body.email
	//req.body.password
	//req.body.dept

	res.redirect('/home/userlist');
})

router.get('/delete/:id', (req, res)=>{
	var user ={
		id: req.params.id,
		username: 'alamin',
		password: '123',
		email: 'alamin@gmail.com',
		dept: 'CS'
	};

	res.render('user/delete', user);
})

router.post('/delete/:id', (req, res)=>{
	
	//delete from DB
	res.redirect('/home/userlist');
})



router.get('/search/:key', (req, res)=>{

	var searchkey = req.params.key;

	//database query
	// response json send

	//res.json({userlist: result});
	//res.redirect('/home/12');
})

module.exports = router;


//validation -> express-validator (https://www.npmjs.com/package/express-validator)
//file upload -> express-fileupload (https://www.npmjs.com/package/express-fileupload)
