var mysql = require('mysql');

var con = mysql.createConnection({
host: "146.148.110.148",
user: "root",
password: "root",
port: "3306", 
database: "housing"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE housinginfo (houseNo INT, houseName VARCHAR(255),zipCode INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");

    con.end();
  });

});