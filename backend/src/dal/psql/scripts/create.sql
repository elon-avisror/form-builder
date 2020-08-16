CREATE TABLE "form" (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(64) NOT NULL,
    submisions      INTEGER,
    page_submit     VARCHAR(64),
    page_list       VARCHAR(64),
    created         TIMESTAMP DEFAULT NOW()
);