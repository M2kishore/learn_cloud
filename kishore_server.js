const express = require("express");
const app = express();
const zipcodes = require("zipcodes");
const mysql = require("mysql");

//static variables
let housename = "";
let houseno = "";
let zipcode = "";
let housephoto = "";
let city = "";
let con = "";

app.use(express.urlencoded());
app.get("/", (req, res, next) => {
  let fileName = "/kishore_form.html";
  res.sendFile(fileName, { root: __dirname }, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});
/** Process POST request */
app.post("/", function (req, res, next) {
  //connecting db
  connectDb();
  houseno = JSON.stringify(req.body.houseno);
  housename = JSON.stringify(req.body.housename);
  zipcode = JSON.stringify(req.body.zipcode);
  housephoto = JSON.stringify(req.body.housephoto);
  console.log(housename, houseno, housephoto, zipcode, city);
  let zipObject = zipcodes.lookup(90210);
  city = zipObject.city;
  console.log(city);
  if (
    houseno !== '""' &&
    housename !== '""' &&
    zipcode !== '""' &&
    housephoto !== '""'
  ) {
    insert(houseno, housename, zipcode, city, housephoto);
    res.status(200).send("Congratulations table updated with ");
    //call db and give status
  } else {
    res.send(`<script>alert("fill all")</script>`);
    res.end();
  }
});
/** Run the app */ app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("server listen on PORT 3000");
});

//helper functions
function connectDb() {
  con = mysql.createConnection({
    host: "34.71.188.244",
    user: "root",
    port: "3306",
    database: "eval",
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    // if(err)throw err;
    // console.log("Connected");
  });
}

function insert(hid, hname, zip, city, url) {
  var sql =
    "INSERT INTO house (houseid, housename,zipcode,city,housephoto) VALUES ?";
  var ct = "select * from house";
  var values = [[hid, hname, zip, city, url]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  con.query(ct, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}