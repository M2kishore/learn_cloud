var mysql = require('mysql');
var con = mysql.createConnection({
host: "146.148.110.148",
user: "root",
password: "root",
port: "3306"
});
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE housing", function (err, result) {
if (err) throw err;
console.log("Database created");
con.end();
});

});