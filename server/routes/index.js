var express = require('express');
var router = express.Router();
var serverMysql = require('./servers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/allclients', function(req, res, next) {
  //res.send(JSON.stringify({value: 1}));
  fetchAllClients(req, res,);
});

module.exports = router;
