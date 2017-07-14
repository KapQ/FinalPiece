var express = require('express');
var router = express.Router();


var models = require('../models');

router.post('/', function(req, res) {
  models.User.create({ username: req.body.username }).then(function() {
    res.redirect('/');
  });
});

router.post('/:UserId/listings', function(req, res) {
  models.Listing.create({
    UserId: req.params.UserId,
    title: req.body.title,
    description: req.body.description
  }).then(function() {
    res.redirect('/');
  });
});


router.post('/', function(req, res){

});

module.exports = router;
