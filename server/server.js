var express = require('express');
var app = express();
var cors = require('cors')

const { mongoose } = require('./db/db');

//Settings
app.set('port', process.env.PORT || 3000);


var uri_origin = 'http://localhost:4200';
  
//middlewares
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors({origin: uri_origin}))

//routes
app.use('/', require('./routes/products'))
//routes

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running`);
});