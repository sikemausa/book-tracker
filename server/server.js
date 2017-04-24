var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((err, res, req, next) =>{
  if(err){
    console.log(err.message);
    res.status(500).send(err)
  }
  next();
})

app.listen(3000)
console.log('on port 3000');
