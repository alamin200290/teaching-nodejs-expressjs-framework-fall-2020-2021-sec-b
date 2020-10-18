"use strict"

function ajax(){

	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'abc.php', true);
	xhttp.send();
	
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var data = JSON.parse(this.responseText);
			alert(data.name);
		}
	}
}
