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

/*function sum(a=0, b=0){
	return a+b;
}

var f2 = function(a=0, b=0){
	alert('f2 calling');
}

//ES6
var f3 = (a=0, b=0)=>{
	alert('f3 calling');
}*/

//ES6
var f4 = color => color;
//console.log(f4('red'));
//var a = new Array();

//f1(color => color);
/*f1((color) => {
	return color;
});*/

/*f1(function (color) {
	return color;
});*/

/*var f = function (color) {
	return color;
}*/

/*function f1(f){
	f();
}


f1(function(){
	alert('test');
});*/


/*const student = {
	name 	: 'alamin',
	id		: '122222-2',
	age		: 11,
	cgpa	: 3,
	getName	: function(){
		return this.name;
	},
	getObj: function(){
		return {
			version: 2,
			getVersion: function (){
				return this.version;
			}
		}
	}
} */

/*console.log(student.name);
console.log(student.age);
console.log(student.cgpa);
*/
/*console.log(student['name']);
console.log(student['age']);
console.log(student['cgpa']);*/

//console.log(student.getName())
//console.log(student['getName']())
//console.log(student['getObj']()['version'])
//console.log(student.getObj().getVersion())


/*function Person(fname="", lname="", age=0, id=""){
	this.fname = fname;
	this.lname = lname;
	this.age	= age;
	this.id		=id; 
}

const p1 = new Person();
const p2 = new Person('al', 'amin', 11, '1222222');
console.log(p2.lname);*/

/*function student (fname, lname){
	return {
		fname: fname,
		lname: lname,
		age: 	11,
		getName: function(){
			return this.fname+" "+this.lname;
		}
	}
}*/

/*const s1 = student('al', 'amin');
//const s2 = student();
console.log(s1.lname);*/

//ES6
/*class Student {

	id = '124';

	constructor(fname, lname){
		this.fname = fname;
		this.lname = lname;
	}

	getName() {
		return this.fname + this.lname;
	}
}

const s1 = new Student('al', 'amin');
console.log(s1.id);*/



