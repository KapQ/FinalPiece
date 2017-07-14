router.get('/', function(req, res, next){
  models.User.findAll().then(function(users){
    res.render('index', {
      title: 'Word Play',
      users: users
    });
  });
});

router.get('/', function(req, res){
  models.User.findAll({include: [models.Listing]}).then(function(users){
    res.render('index', {
      title: 'Word Play',
      users: users
    });
  });
});

module.exports = router;
