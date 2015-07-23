var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/', function(req, res) {
	res.render('index')
})

app.post('/formsubmit', function(req, res) {
	// var theSubmission = req.body.email
	res.redirect('/success')
})

app.get('/success', function(req, res) {
	res.render('success')
})

var server = app.listen(7849, function() {
	console.log('Express server listening on port ' + server.address().port);
});
