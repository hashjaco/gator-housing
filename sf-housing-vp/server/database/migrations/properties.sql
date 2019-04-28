DROP TABLE IF EXISTS properties;

CREATE TABLE IF NOT EXISTS properties(
id serial PRIMARY KEY,
title VARCHAR[50] NOT NULL,
property_type VARCHAR[16] NOT NULL,
no_of_rooms INT NOT NULL,
address VARCHAR[60] UNIQUE NOT NULL,
zip_code INT NOT NULL,
description VARCHAR[255] NOT NULL,
price INT NOT NULL,
image_path TEXT NOT NULL,
post_date TIMESTAMP NOT NULL,
user_id INT REFERENCES users(user_id),
tags text[]
);
