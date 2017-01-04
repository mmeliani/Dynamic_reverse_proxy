var Chance= require('chance');
var chance= new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send(generateStudents());
});

app.listen(3000, function(){
	console.log('exmaple app listening on port 3000');
})


function generateStudents(){
	var numberS = chance.integer({
		min:0,
		max:10
});
	console.log(numberS);
	var students = [];
	for(var i = 0; i < numberS; i++){
		var gender = chance.gender();
		var birthday = chance.year({
			min:1996,
			max:1996});
		students.push({ 
			firstname: chance.first({ 
				gender: gender }),
			lastname: chance.last(),
			gender: gender,
			birthday: chance.birthday({
				year: birthday }) });
			

	console.log(students);
	return students; 

}



}
