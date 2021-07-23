--Connect to database
\c d2r9v82k5agpia;
--

--Create a table products
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  image_url TEXT,
  price NUMERIC,
  number_of_items INT,
  description_of_item TEXT,
  in_stock BOOLEAN
);
--