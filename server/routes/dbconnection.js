
var mysql = require('mysql');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection({
            host: "127.0.0.1",
            user: "garagegestAdmin",
            password: "garagegestAdmin",
            database: 'garagegest',
            port: '3306'
    });

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();