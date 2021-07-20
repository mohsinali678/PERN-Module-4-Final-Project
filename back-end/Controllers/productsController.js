// DEPENDENCIES
const express = require("express");
const products = express.Router();
const { getAllProducts } = require("../queries/products");

// ROUTES

// Index Route
products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.json({
    success: true,
    payload: allProducts,
  });
});

// Create Route
products.post("/add", async (req, res) => {});

// Show Route
products.get("/:id", async (req, res) => {});

// Destroy Route
products.delete("/:id", async (req, res) => {});

// Update Route
products.put("/:id", async (req, res) => {});

module.exports = products;
