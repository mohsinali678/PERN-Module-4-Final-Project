--Connect to database
\c d2r9v82k5agpia;
--


--Populate table products
INSERT INTO products
(name, image_url, price, number_of_items, description_of_item)
VALUES
('Rawlings R8U Official League Baseball', 
'https://dks.scene7.com/is/image/GolfGalaxy/16RAWUFFCLLGLB3XXBSB?qlt=70&wid=600&fmt=pjpeg',
 3.99, 20, 'Train for the upcoming season with the Rawlings R8U Baseball. Designed with a durable synthetic leather cover, the Rawlings R8U Official League Baseball is an excellent practice companion. This recreational baseball also offers Rawlings Major League seams with 108 raised red stitches for improved grip and ball control. Includes 1 ball per purchase.');
--