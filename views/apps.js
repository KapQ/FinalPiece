var http = require('http');
var app = express();




router.get('/', function(req, res){
  res.render('index', {title: 'Express'});
});

var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {title: 'Express'});
});

router.get('/users', function(req, res){
  res.render('users', {title: 'The Fall'})
});

module.exports = router;
