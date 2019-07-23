var express = require('express');
var router = express.Router();
var serverMysql = require('./servers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/allCustomers', function(req, res, next) {
  //res.send(JSON.stringify({value: 1}));
  fetchAllCustomers(req, res,);
});


router.get('/allVehicles', function(req, res, next) {
  //res.send(JSON.stringify({value: 1}));
  fetchAllVehicles(req, res,);
});

module.exports = router;
