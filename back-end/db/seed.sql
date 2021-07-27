--Connect to database products_dev
\c products_dev;
--

--Populate table products
INSERT INTO products
(name, image_url, file, price, number_of_items, description_of_item)
VALUES
('Rawlings R8U Official League Baseball', 
'https://dks.scene7.com/is/image/GolfGalaxy/16RAWUFFCLLGLB3XXBSB?qlt=70&wid=600&fmt=pjpeg',
null,
 3.99, 20, 'Train for the upcoming season with the Rawlings R8U Baseball. Designed with a durable synthetic leather cover, the Rawlings R8U Official League Baseball is an excellent practice companion. This recreational baseball also offers Rawlings Major League seams with 108 raised red stitches for improved grip and ball control. Includes 1 ball per purchase.'),
 ('Nike Vapor 24/7 2.0 Football',
 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/chrcggpu59jstpstoqs3/vapor-24-7-2-football-Cz962m.png',
 null,
 25, 0, 'Top up your passing game with this NFL Spin 4.0 American Football from Nike. In a monochrome colourway, this size 9 ball is buit from a grippy composite leather for premium skills training. With a single grip strap for an easy throw when going downfield, this durable ball is signed off with the signature Swoosh logo with a paint drip effect.');
--



