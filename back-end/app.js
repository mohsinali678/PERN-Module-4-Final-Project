//DEPENDENCIES
const express = require("express");


//CONFIGURATION
const app = express();


//ROUTES

/* Welcome Route */
app.get("/", (req, res) => {
    res.send("Welcome to Online Store!");
});



//EXPORTS
module.exports = app;