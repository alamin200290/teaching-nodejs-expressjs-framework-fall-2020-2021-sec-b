const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
	
	//req.session.uname != null
	if(req.cookies['uname'] != null){
		
		var data = {
			name: req.session.uname,
			id: 16
		};
		
		res.render('home/index', data);
	}else{
		res.redirect('/login');
	}
})

module.exports = router;