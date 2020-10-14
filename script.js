"use strict"

//a =10;
/*var b =30;
let c =40;
const d =60;*/

/*var a = [
			[
				[11,23,4,5],
				[12,88,2,6],
				[22,33,4,5]
			],
			[
				[11,55,4,5],
				[12,11,6,6],
				[26,22,4,5]
			]
		];

alert(a[1][1][2]);*/

function sum(a=0, b=0){
	return a+b;
}

var f2 = function(a=0, b=0){
	alert('f2 calling');
}

var f3 = (a=0, b=0)=>{
	alert('f3 calling');
}


function f1(f){
	f();
}

f1((a=0, b=0)=>{
	alert('f3 calling');
});

//var a = new Array();
