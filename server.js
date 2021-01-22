const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let firstName;
console.log("start of server.js top level code");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Test- Updated1</title>
    </head>
    <body>
    You had entered ${firstName}
      <form enctype="application/x-www-form-urlencoded" method="post">
        <label for="firstName">Enter First Name:</label>
        <input type="text" name="firstName" />
        <button type="submit">Save</button>
      </form>
    </body>
  </html>`);
});

app.post("/", (req, res) => {
  console.log(req.body);
  firstName = req.body.firstName;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
