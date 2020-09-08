const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// router

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.options(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

require("./controllers/tables")(app);

app.listen(3002);
