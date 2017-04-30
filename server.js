var express = require('express');
var moment = require('moment');

console.log('server is starting. . .');

var app = express();

app.use(express.static('website'));

app.listen(3000);

app.get('/:date', showDate);

function showDate(req, res){

	var data = req.params;
	if(moment(data.date).isValid())
		var date = moment(data.date);
	else
		var date = moment.unix(Number(data.date));
	
	if(date){
		
		var json = {
		
			natural: date.format("MMMM Do, YYYY"),
			unix: date.format("X")
			
		}
		
		console.log("json created.");
		
	}
	
	res.send(json);

}