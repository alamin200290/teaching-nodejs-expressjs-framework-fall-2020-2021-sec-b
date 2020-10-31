const express = require('express');
const app = express();


app.get('/', (req, res)=>{
	res.send('Hello from express server');	
});

app.get('/home', (req, res)=>{
	res.send('this is home page');
})


app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});