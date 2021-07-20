//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const productsController = require("./Controllers/productsController");

//CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES

/* Welcome Route */
app.get("/", (req, res) => {
  res.send("Welcome to the Online Sports Store!");
});

// Products Route
app.use("/products", productsController);

// 404 Route
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//EXPORTS
module.exports = app;
