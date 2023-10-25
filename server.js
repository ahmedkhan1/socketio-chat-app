var express = require('express');
var app = express();

var bodyParser = require(‘body-parser’)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(__dirname));

var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
});

