const express = require("express");
const bodyParser = require('body-parser');

//require those routes which I created seperately
const balanceRoute = require("./routes/balanceApi.js");

const app = express();
app.use(bodyParser.json());


app.use("/", balanceRoute);

//export route for unit testing and chat
module.exports = app;