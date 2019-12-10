//to install dependencies: npm install <pkg> --save

const express = require("express");
//const pg = require('pg');
//var axios = require('axios')

require('dotenv').config;

const port = process.env.PORT || 3000;

//var http = require('http');
//var fs = require('fs');
var path = require('path');

const app = express();
//var server = http.createServer(app);

app.use(express.static("src"));

app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname + '/src/'));

});

app.listen(port, () => {console.log(`'http://localhost:${port}`)});
