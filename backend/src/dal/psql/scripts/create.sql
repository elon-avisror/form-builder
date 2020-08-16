CREATE TABLE "user" (
    id              SERIAL PRIMARY KEY,
    first_name      VARCHAR(64) NOT NULL,
    last_name       VARCHAR(64) NOT NULL,
    age             FLOAT,
    city            VARCHAR(64),
    phone_number    VARCHAR(16),
    created         TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "form" (
    id              SERIAL PRIMARY KEY,
    user_id         INTEGER REFERENCES "user"(id) NOT NULL,
    name            VARCHAR(64) NOT NULL,
    submissions     INTEGER,
    page_submit     VARCHAR(128),
    page_list       VARCHAR(128),
    created         TIMESTAMP DEFAULT NOW()
);