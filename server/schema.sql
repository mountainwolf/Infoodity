-- while running psql in the terminal, run '\i path/to/schema.sql' to generate db and tables locally

CREATE DATABASE mountainwolf;
\connect mountainwolf

CREATE TABLE "users" (
"id"  SERIAL NOT NULL ,
"timestamp" TIMESTAMP NOT NULL DEFAULT current_timestamp ,
"user_name" TEXT NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "restaurants" (
"id"  SERIAL NOT NULL ,
"timestamp" TIMESTAMP NOT NULL DEFAULT current_timestamp ,
"rating" INTEGER NOT NULL DEFAULT 0 ,
"name" TEXT NOT NULL ,
"price" TEXT NOT NULL ,
"location" TEXT NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "reviews" (
"id"  SERIAL NOT NULL ,
"timestamp" TIMESTAMP NOT NULL DEFAULT current_timestamp ,
"user_id" INTEGER NOT NULL ,
"restaurant_id" INTEGER NOT NULL ,
"rating" INTEGER NOT NULL ,
"dish_name" TEXT NOT NULL ,
"text" TEXT NOT NULL ,
"image_url" TEXT NOT NULL ,
PRIMARY KEY ("id")
);

ALTER TABLE "reviews" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "reviews" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

INSERT INTO users (user_name) values ('guest');
INSERT INTO restaurants (rating, name, price, location) values (5, 'The Sentinel', '$$', '94105');
INSERT INTO restaurants (rating, name, price, location) values (5, 'The Melt', '$', '94105');
INSERT INTO restaurants (rating, name, price, location) values (5, 'SOMA Eats', '$$', '94105');
INSERT INTO reviews (user_id, restaurant_id, rating, dish_name, text, image_url) values (1, 1, 5, 'roast beef sandwich', 'Delicious and roasty.', 'http://s3.amazonaws.com/foodspotting-ec2/reviews/807818/thumb_600.jpg');
INSERT INTO reviews (user_id, restaurant_id, rating, dish_name, text, image_url) values (1, 2, 4, 'grilled cheese', 'Cheese is good.', 'http://media4.popsugar-assets.com/files/2011/06/25/5/192/1922195/melt2/i/Melt-Grilled-Cheese-Sandwiches.jpg');
INSERT INTO reviews (user_id, restaurant_id, rating, dish_name, text, image_url) values (1, 3, 5, 'blt', 'Bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon bacon.', 'http://s3-media2.fl.yelpassets.com/bphoto/gQo4Jvymex-pKmQYQBeFUw/348s.jpg');
INSERT INTO reviews (user_id, restaurant_id, rating, dish_name, text, image_url) values (1, 1, 3, 'veal meatball parm sandwich', 'Boring presentation but tasty.', 'http://www.foodgps.com/wp-content/uploads/2009/08/the-sentinel-veal-meatball-parm-sandwich.jpg');
INSERT INTO reviews (user_id, restaurant_id, rating, dish_name, text, image_url) values (1, 2, 1, 'the mac daddy', 'So gross, man.', 'http://s3-media4.fl.yelpassets.com/bphoto/CS5uRvEPjyWtcFdmnMuYyA/ls.jpg');
INSERT INTO reviews (user_id, restaurant_id, rating, dish_name, text, image_url) values (1, 3, 5, 'salmon salad', 'Very healthy and fresh. I feel good about myself for eating this.', 'http://s3-media1.fl.yelpcdn.com/bphoto/Le--mzrlErgpMhd8bQRYEw/o.jpg');
