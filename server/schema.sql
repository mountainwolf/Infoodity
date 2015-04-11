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

