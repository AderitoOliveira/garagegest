var con = require('./dbconnection.js');

//GET ALL CUSTOMERS
fetchAllCustomers = function(data, callback) {
    con.query('SELECT * FROM CUSTOMERS', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL CLIENTS");   

    });

}

//GET CUSTOMER VEHICLE DETAILS
fetchcustomerVehicleDetails = function(data, callback) {
    console.log(data);
    console.log(data.params.customerid);
    con.query('SELECT * FROM VEHICLES where CLIENT_ID = ?', [data.params.customerid],function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET CUSTOMER VEHICLE DETAILS");   

    });

}


//FILTER CUSTOMER
filterCustomer = function(data, callback) {
    con.query('SELECT * FROM CUSTOMERS where CLIENT_ID = ?', [data.params.customerid],function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL CLIENTS");   

    });

}

//GET ALL VEHICLES
fetchAllVehicles = function(data, callback) {
    con.query('SELECT * FROM VEHICLES', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL CLIENTS");   

    });

}