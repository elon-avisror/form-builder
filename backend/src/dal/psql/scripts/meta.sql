INSERT INTO "form"
    (name,                   submissions)
VALUES
    ('Car Campaign',         1),
    ('Job Application',      1);

INSERT INTO "label"
    (form_id,        name,              type,           value)
VALUES
    (1,              'Model',           'text',         'Honda'),
    (1,              'Color',           'text',         'Black'),
    (1,              'Year',            'number',       '2006'),

    (2,              'First Name',       'text',         'John'),
    (2,              'Last Name',        'text',         'Pfeifer'),
    (2,              'Age',              'number',       '15'),
    (2,              'City',             'text',         'Tel Aviv'),
    (2,              'Phone Number',     'tel',          '073-16-XXXX');

INSERT INTO "submission"
    (form_id,        type,          labels)
VALUES
    (1,              'BLANK',       '[{"name":"Model","type":"text","value":""},{"name":"Color","type":"text","value":""},{"name":"Year","type":"number","value":""}]'),
    (1,              'SUBMITED',    '[{"name":"Model","type":"text","value":"Honda"},{"name":"Color","type":"text","value":"Black"},{"name":"Year","type":"number","value":"2006"}]'),
    (2,              'BLANK',       '[{"name":"First Name","type":"text","value":""},{"name":"Last Name","type":"text","value":""},{"name":"Age","type":"number","value":""},{"name":"City","type":"text","value":""},{"name":"Phone Number","type":"tel","value":""},{"name":"Email","type":"email","value":""}]'),
    (2,              'SUBMITED',    '[{"name":"First Name","type":"text","value":"Elon"},{"name":"Last Name","type":"text","value":"Avisror"},{"name":"Age","type":"number","value":"30"},{"name":"City","type":"text","value":"Yeruham"},{"name":"Phone Number","type":"tel","value":"050-300-6092"},{"name":"Email","type":"email","value":"avisror.elon@gmail.com"}]');