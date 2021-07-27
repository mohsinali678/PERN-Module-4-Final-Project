--Delete database products_dev if it is already there.
DROP DATABASE IF EXISTS products_dev;
--

--Create database products_dev
CREATE DATABASE products_dev;
--

--Connect to database products_dev
\c products_dev;
--

--Delete tables products if it is already there
DROP TABLE IF EXISTS products;
--

--Create a table products
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  image_url TEXT,
  file file,
  price NUMERIC,
  number_of_items INT,
  description_of_item TEXT,
  in_stock BOOLEAN
);
--