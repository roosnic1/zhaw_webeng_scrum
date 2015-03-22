var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/api',function(req, res) {
	res.send('Hello API');
});

app.listen(app.get('port'), function() {
	console.log('Server is runnning at:' + app.get('port'));
});