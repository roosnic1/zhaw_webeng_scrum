var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


console.log(process.env.MONGOLAB_URI);
if(process.env.MONGOLAB_URI === undefined) {
	mongoose.connect('mongodb://localhost/ScrumServer');
} else {
	mongoose.connect(process.env.MONGOLAB_URI);
}

var app = express();
var api = require('./routes/api');

app.set('port',(process.env.PORT || 5000));

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Content-Length, X-Requested-With');

	if('OPTIONS' == req.method) {
		res.sendStatus(200);
	} else {
		next();
	}
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(allowCrossDomain);
app.use(express.static(__dirname + '/public'));

app.use('/api',api);

/*app.get('/api',function(req, res) {
	res.send('Hello API');
});*/

app.listen(app.get('port'), function() {
	console.log('Server is runnning at:' + app.get('port'));
});