const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const { writeFileSync, readFileSync } = require("fs");

let firstName;
console.log("start of server.js top level code");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/writetovolume", (req, res) => {
  writeFileSync(
    path.join(__dirname, "data", "file.txt"),
    new Date().toTimeString()
  );
  res.redirect("/");
});

app.get("/readvolumecontent", (req, res) => {
  res.send(
    readFileSync(path.join(__dirname, "data", "file.txt"), {
      encoding: "utf8",
      flag: "r",
    })
  );
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "home.html"));
});

app.post("/", (req, res) => {
  console.log(req.body);
  firstName = req.body.firstName;
  console.log(`You entered ${firstName}`);
  res.redirect("/");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

// docker build -t image1:1.0 --build-arg DEFAULT_PORT=3000 .
// docker run -dp 8000:3000 -v anyname:/app/data   -v "%cd%:/app"  -v /app/node_modules	--env-file ./.env --name cont1 image1:1.0

// docker stop cont1
// docker rm cont1
// docker rmi image1:1.0
