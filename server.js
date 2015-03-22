var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ScrumServer');
var app = express();
var api = require('./routes/api');

app.set('port',(process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.use('/api',api);

/*app.get('/api',function(req, res) {
	res.send('Hello API');
});*/

app.listen(app.get('port'), function() {
	console.log('Server is runnning at:' + app.get('port'));
});