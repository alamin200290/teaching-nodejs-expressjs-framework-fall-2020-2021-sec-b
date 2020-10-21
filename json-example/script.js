"use strict"


/*let person ={
	name: 'alamin',
	id: 12,
	age: 3344
}
*/

/*let data = {
	'name': 'alamin',
	'dept': 'cs',
	'email': 'alamin@aiub.edu',
	'id': 12
}*/

/*let json =[
	
	{
		'name': 'alamin',
		'dept': 'cs',
		'email': 'alamin@aiub.edu',
		'id': 12
	},
	{
		'name': 'alamin',
		'dept': 'cs',
		'email': 'alamin@aiub.edu',
		'id': 12
	}
] */


function ajax(){

	let person= {
		'name': 'alamin',
		'dept': 'cs',
		'email': 'alamin@aiub.edu',
		'id': 12
	}

	let json = JSON.stringify(person);
	let xhttp = new XMLHttpRequest();
		
		xhttp.open('GET', 'abc.php?data='+json, true);
		xhttp.send();
		xhttp.onreadystatechange = function (){

			if(this.readyState == 4 && this.status == 200){
				let data = JSON.parse(this.responseText);
				alert(data.email);
			}
		}
}