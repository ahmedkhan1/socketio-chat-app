const http = require(‘http’).Server(app);
const io = require(‘socket.io’)(http);
const express = require('express');
const app = express();

const bodyParser = require(‘body-parser’)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(__dirname));

const server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
});

