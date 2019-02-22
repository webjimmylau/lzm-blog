var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.json({name: 'admin', pwd: '111111'})
});

module.exports = router;