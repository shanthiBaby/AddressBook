const express = require("express");
const app = express();
var parseString = require("xml2js").parseString;

const port = 3000;

const http = require("http");

app.use(express.static("ui"));
app.use("/modules", express.static("node_modules"));

app.get("/api/contacts", (req, res) => {
  var options = {
    hostname: "www.bindows.net",
    path: "/documentation/download/ab.xml"
  };

  var gsaReq = http
    .get(options, function(response) {
      var completeResponse = "";
      response.on("data", function(chunk) {
        completeResponse += chunk;
      });
      response.on("end", function() {
        parseString(completeResponse, function(err, result) {
            res.send(result);
        });
      });
    })
    .on("error", function(e) {
      console.log("problem with request: " + e.message);
    });
});

app.get("/hello", (req, res) => {
  res.send({ name: "sss" });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
