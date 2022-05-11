var mysql = require('mysql');

var num = 12;
var name = "HillSide";
var zip = 90211;

var con = mysql.createConnection({
    host: "146.148.110.148",
    user: "root",
    password: "root",
    port: "3306", 
    database: "housing"
    });

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected RDS");
});

var sql = `INSERT INTO housinginfo(houseNo,houseName,zipCode) VALUES (${num},"${name}",${zip})`;
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

con.query('SELECT * from housinginfo', function (error, results, fields) {
  if (error) throw error;
  console.log("The field results are");
  console.log(typeof(fields) +" "+ fields[0].name+" "+fields[1].name+" "+fields[2].name);
  console.log("The Select results are");
  console.log(results);
});

con.end();