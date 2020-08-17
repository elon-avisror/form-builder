INSERT INTO "form"
    (id,    name,                   submissions)
VALUES
    (1,     'Car Campaign',         15),
    (2,     'Job Application',      20);

INSERT INTO "label"
    (id,    form_id,        name,               type,           value)
VALUES
    (1,     2,              'First Name',       'text',         'John'),
    (2,     2,              'Last Name',        'text',         'Pfeifer'),
    (3,     2,              'Age',              'number',       '15'),
    (4,     2,              'City',             'text',         'Tel Aviv'),
    (5,     2,              'Phone Number',     'tel',          '073-16-XXXX');