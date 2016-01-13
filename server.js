var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/rest-test');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
	res.sendFile('html/index.html', { root : './client' })
});

app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('Server is running on port 3000');