DROP DATABASE IF EXISTS d2r9v82k5agpia;
CREATE DATABASE d2r9v82k5agpia;

\c d2r9v82k5agpia;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  image_url TEXT,
  price NUMERIC,
  number_of_items INT,
  in_stock BOOLEAN
);