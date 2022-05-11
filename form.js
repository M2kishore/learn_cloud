var http = require("http");
var url = require("url");
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "146.148.110.148",
    user: "root",
    password: "root",
    port: "3306", 
    database: "housing"
    });


//Form Validation using Cloud Server

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    var q = url.parse(req.url, true).query;
     var num = q.num;
     var name = q.name;
     var zip = q.zip;
    //Image upload feature
    //var image = q.image;
    if(name == null || name == ""){
        res.write("Name can't be blank\n");
       
    }
     if(num == null || num == ""){
        res.write("House No can't be blank\n");
       
    }
     if(zip == null || zip == ""){
        res.write("Zip Address can't be blank\n");
   
    }
    
    else{
    res.write('\nForm submitted\t'); 
    console.log("\n Form Submitted");
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
    }
    res.end();
});
server.listen(3000);








