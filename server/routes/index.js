var express = require('express');
var router = express.Router();
var serverMysql = require('./servers.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET ALL CUSTOMERS
router.get('/allCustomers', function(req, res, next) {
  fetchAllCustomers(req, res);
});

//GET CUSTOMER VEHICLE DETAILS
router.get('/customerVehicleDetails/:customerid', function(req, res, next) {
  fetchcustomerVehicleDetails(req, res);
});

//FILTER CUSTOMER
router.get('/filtercustomer/:customerid', function(req, res, next) {
  filterCustomer(req, res);
});

//GET ALL VEHICLES
router.get('/allVehicles', function(req, res, next) {
  fetchAllVehicles(req, res);
});

//GET VEHICLE REPAIR HEADER INFO
router.get('/getVehicleRepairInfo/:vehicleid', function(req, res, next) {
  fetchVehicleRepairInfo(req, res);
});


module.exports = router;
