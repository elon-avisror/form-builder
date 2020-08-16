INSERT INTO "user"
    (id,    first_name,     last_name,      age,    city,           phone_number)
VALUES
    (1,     'John',         'Pfeifer',      15,     'Tel Aviv',     '073-16-XXXX');

INSERT INTO "form"
    (id,    user_id,        name,                   submissions,        page_submit,                page_list)
VALUES
    (1,     1,              'Car Campaign',         15,                 'SOME_PAGE_SUBMIT',         'SOME_PAGE_LIST'),
    (2,     1,              'Job Application',      20,                 'SOME_PAGE_SUBMIT',         'SOME_PAGE_LIST');