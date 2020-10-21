"use strict"

$(document).ready(function(){
	
	/*$('input').click(function(){
		$('body>h1').html('test....');
	});*/

	/*$('input').on('click', function(){
		$('body>h1').html('test....');
	});*/

	/*$('input[type=button]').on('click', function(){
		let name = $('input[type=text]').val();
		$('body>h1').html(name);
	});

	$('input[type=button]').click(function(){
		$('body>h1').html($('input[type=text]').val());
	});*/

	$('input[type=button]').click(function(){
		

		let abc = {
				name: $('input[type=text]').val()
			}

		$.ajax({
			url: 'abc.php',
			type: 'GET',
			data: abc,
			success: function(response){
				alert(response);
			},
			error: function(error){

			}
		});

	});
});