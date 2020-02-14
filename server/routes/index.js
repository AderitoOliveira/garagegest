var express = require('express');
var router = express.Router();
var serverMysql = require('./servers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/allCustomers', function(req, res, next) {
  fetchAllCustomers(req, res);
});

router.get('/customerVehicleDetails/:customerid', function(req, res, next) {
  fetchcustomerVehicleDetails(req, res);
});

router.get('/filtercustomer/:customerid', function(req, res, next) {
  filterCustomer(req, res);
});


router.get('/allVehicles', function(req, res, next) {
  fetchAllVehicles(req, res);
});

module.exports = router;
