// DEPENDENCIES
const express = require("express");
const products = express.Router();
const {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products");

// ROUTES

// Index Route
products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.status(200).json({
    success: true,
    payload: allProducts,
  });
});

// Create Route
products.post("/add", async (req, res) => {
  try {
    const newProduct = await addProduct(req.body);
    if (newProduct["id"]) {
      res.status(200).json({
        success: true,
        payload: newProduct,
      });
    } else {
      console.log(`Database error: ${newProduct}`);
      throw `Error adding ${req.body} to the database`;
    }
  } catch (e) {
    res.status(404).json({
      error: "Product not added",
      message: e,
    });
  }
});

// Show Route
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProduct(id);
    if (product["id"]) {
      res.json({
        success: true,
        payload: product,
      });
    } else {
      console.log(`Database error: ${product}`);
      throw `There is no product with the id: ${id}`;
    }
  } catch (e) {
    res.status(404).json({
      error: "Product not found",
      message: e,
    });
  }
});

// Destroy Route
products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct["id"]) {
      res.status(200).json({
        success: true,
        payload: deletedProduct,
      });
    } else {
      console.log(`Database error: ${deletedProduct}`);
      throw `There is no product to delete with the id: ${id}`;
    }
  } catch (e) {
    res.status(404).json({
      error: "Product not deleted",
      message: e,
    });
  }
});

// Update Route
products.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await updateProduct(id, req.body);
    console.log(updatedProduct);
    if (updatedProduct["id"]) {
      res.status(200).json({
        success: true,
        payload: updatedProduct,
      });
    } else {
      console.log(`Database error: ${updatedProduct}`);
      throw `There is no product to be updated with the id: ${id}`;
    }
  } catch (e) {
    res.status(404).json({
      error: "Product not updated",
      message: e,
    });
  }
});

module.exports = products;
