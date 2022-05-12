const express = require("express");
const app = express();
/** Decode Form URL Encoded data */
app.use(express.urlencoded());
/** Show page with a form */ {
  /* <h1>Contact Us</h1><form method="POST" action="/">Name:<input type="text" name="name" placeholder="name"><br>E-mail:<input type="email" name="email" placeholder="email"><br>WebAddress:<input type="text" name="webaddress" placeholder="web address"><br>Comments:<br><textarea id="comments" class="text" cols="41" rows ="10" name="comments"></textarea><br><input type="submit"></form> */
}
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
  let houseno = JSON.stringify(req.body.houseno);
  let housename = JSON.stringify(req.body.housename);
  let zipcode = JSON.stringify(req.body.zipcode);
  let housephoto = JSON.stringify(req.body.housephoto);
  if (
    houseno !== '""' &&
    housename !== '""' &&
    zipcode !== '""' &&
    housephoto !== '""'
  ) {
    res.send(JSON.stringify(req.body));
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
