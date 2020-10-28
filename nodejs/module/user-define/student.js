
/*var sname 	=	"alamin";
var sid		=	12;
var dept	=	"CS";


/*function getName(){
	return "alamin";
}

var getName = ()=>{
	return "alamin"
}

var setName = (sname)=>{
	return "done!";
}

module.exports.id = sid;
module.exports.getName = getName();*/


module.exports = {
	name : 'alamin',
	id 	 : 123,
	dept : 'CS',
	getName: function(){
		return this.name;
	} 
}

/*module.exports = function(){

	var abc = "test";

	return {
		name : 'alamin',
		id 	 : 123,
		dept : 'CS',
		getName: function(){
			return this.name;
		}
	}
}*/


/*exports class Student {
	name = 'alamin';
	id	= 123;
	getName(){
		return this.name;
	}
}*/