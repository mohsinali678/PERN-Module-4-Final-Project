DROP DATABASE IF EXISTS products_dev;
CREATE DATABASE products_dev;

\c products_dev;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  image_url TEXT,
  price NUMERIC,
  number_of_items INT,
  in_stock BOOLEAN
);