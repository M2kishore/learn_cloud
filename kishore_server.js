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
  let name = JSON.stringify(req.body.name);
  let email = JSON.stringify(req.body.email);
  let webAddress = JSON.stringify(req.body.webaddress);
  let comments = JSON.stringify(req.body.comments);
  console.log(name === "");
  if (
    name !== '""' &&
    email !== '""' &&
    webAddress !== '""' &&
    comments !== '""'
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
