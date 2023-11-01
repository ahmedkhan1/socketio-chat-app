const express = require('express');
const routes = require('./routes/v1');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(`${__dirname}/views/`));

app.use("v1/api", routes);

const server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
});


