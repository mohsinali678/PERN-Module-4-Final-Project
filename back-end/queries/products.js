const db = require("../db/dbConfig");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error) {
    return error;
  }
};

const getProduct = async (id) => {
  try {
    const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
    return oneProduct;
  } catch (error) {
    return error;
  }
};

const addProduct = async (product) => {
  try {
    if (!product.name) {
      throw "You must specify a name of product";
    }
    const newProduct = await db.one(
      "INSERT INTO products (name, image_url, price, number_of_items, description_of_item) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        product.name,
        product.image_url,
        product.price,
        product.number_of_items,
        product.description_of_item,
      ]
    );
    return newProduct;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one(
      "DELETE FROM products where id=$1 RETURNING *",
      id
    );
    return deletedProduct;
  } catch (error) {
    return error;
  }
};

const updateProduct = async (id, product) => {
  try {
    const updatedProduct = await db.one(
      "UPDATE products SET name=$1, image_url=$2, price=$3, number_of_items=$4, description_of_item=$5 WHERE id=$6 RETURNING *",
      [
        product.name,
        product.image_url,
        product.price,
        product.number_of_items,
        product.description_of_item,
        id,
      ]
    );
    return updatedProduct;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
