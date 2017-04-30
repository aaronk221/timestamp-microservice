var express = require('express');
var moment = require('moment');

var port = process.env.PORT || 8080;

console.log('server is starting. . .');

var app = express();

app.use(express.static('website'));

app.listen(3000, function(){

	console.log('server is running');

});

app.get('/:date', showDate);

function showDate(req, res){

	var data = req.params;
	if(moment(data.date).isValid())
		var date = moment(data.date);
	else
		var date = moment.unix(Number(data.date));
	
	if(date.isValid()){
		
		var json = {
		
			natural: date.format("MMMM Do, YYYY"),
			unix: date.format("X")
			
		}
		
		console.log("json created.");
		
	}
	else{

		var json = {

			natural: null,
			unix: null

		}

	}
	
	res.send(json);

}