const res = require('express/lib/response');
var zipcodes = require('zipcodes');
var hills = zipcodes.lookup(90210);
console.log(hills.zip,hills.city);

//Store this data in table - housinginfo 
// but schema already done
// for every zip - corresponding city can be taken 
