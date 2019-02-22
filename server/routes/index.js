var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.redirect('/');
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.json({name: 'admin', pwd: '111111'})
});

module.exports = router;
