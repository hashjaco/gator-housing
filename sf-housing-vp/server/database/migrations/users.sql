DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
    user_id serial PRIMARY KEY,
    email_address VARCHAR[50] UNIQUE NOT NULL,
    phone_no VARCHAR[10] NOT NULL,
    password VARCHAR[255] UNIQUE NOT NULL,
    address VARCHAR[100] NOT NULL,
    is_admin BOOL NOT NULL
)