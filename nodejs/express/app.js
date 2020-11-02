const express 	= require('express');
const app 		= express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	res.send('Hello from express server');	
});

app.get('/home', (req, res)=>{

	var data = {
		name: 'xyz',
		id: 16
	};

	res.render('test', data);
})

app.get('/login', (req, res)=>{
	res.render('login/index')
})

app.post('/login', (req, res)=>{
	res.send('this is login page');
})

app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});