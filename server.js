var express = require('express');
var mongoose = require(mongoose’);
var app = express();

app.use(express.static(__dirname));

var dbUrl = "mongodb://username:pass@ds257981.mlab.com:57981/simple-chat";
mongoose.connect(dbUrl , (err) => { 
    console.log("mongodb connected",err);
})

var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
});

