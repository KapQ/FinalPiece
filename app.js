var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
console.log("boring")

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'end now',
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next){
  var views = req.session.views

  if (!views) {
    views = req.session.views = {}
  }

  var pathname = paresurl(req).pathname

  views[pathname] = (views[pathname] || 0) + 1

  next()
})

app.get('/index', function (req, res, next){
  res.send('game on' + req.session.views['/index'] + 'false ones')
})

app.get('/users', function (req, res, next){
  res.send('game on' + req.session.views['/users'] + 'false ones')
})

app.use('/', routes);
app.use('/users', users);

app.use(function(req, res, next){
  var err = new Error("No Find");
  err.status = 404;
  next(err);
});

if(app.get('env')==='development'){
  app.use(function(err, req, res, next){
    res.status(err.status ||500);
    res.render('error',{
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next){
  res.status(err.status ||500);
  res.render('errord',{
    message: err.message,
    error: {}
  });
});
app.listen(3000,function(){
  console.log("What it do");
});

module.exports = app;
