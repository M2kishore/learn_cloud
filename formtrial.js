var http = require("http");
var url = require("url");


//Form Validation using Cloud Server

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    var q = url.parse(req.url, true).query;
     var num = q.num;
     var name = q.name;
     var zip = q.zip;
    //Image upload feature
    var image = q.image;
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
    console.log("\n Form Submitted")
    res.write(image);
    
    }
    res.end();
});
server.listen(3000);








