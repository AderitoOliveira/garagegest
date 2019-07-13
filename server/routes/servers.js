var con = require('./dbconnection.js');

var connection;
//GET ALL CUSTOMERS
fetchAllClients = function(data, callback) {
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