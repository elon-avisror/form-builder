CREATE TABLE "form" (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(64) NOT NULL,
    submissions     INTEGER DEFAULT 0,
    created         TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "label" (
    id              SERIAL PRIMARY KEY,
    form_id         INTEGER REFERENCES "form"(id) NOT NULL,
    name            VARCHAR(64) NOT NULL,
    type            VARCHAR(32) NOT NULL,
    value           TEXT DEFAULT '',
    created         TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "submission" (
    id              SERIAL PRIMARY KEY,
    form_id         INTEGER REFERENCES "form"(id) NOT NULL,
    labels          TEXT DEFAULT '{}',
    created         TIMESTAMP DEFAULT NOW()
);