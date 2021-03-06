const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));

require("./server/config/mongoose.js");
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})