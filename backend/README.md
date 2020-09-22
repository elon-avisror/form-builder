# Form-Builder API

## Backend Installation

1. Make sure you have installed dev dependencies:

    * [nodejs](https://nodejs.org/en/download/)
    * [typescript](https://www.npmjs.com/package/typescript)
    * [postgres](https://www.postgresql.org/download/)
    * [openssl](https://www.openssl.org/source/)
    * [pgadmin4](https://www.pgadmin.org/download/) - Client tool (Optional)

2. Configuration manners:

    Go to a **secret folder** in your machine (not this project) and do the following command in order to create SSL key and certificate:

        openssl req -nodes -new -x509 -keyout key.pem -out cert.pem

    *Note: if you are using google-chrome as your browser, you need to approve this certificate in order to enable the HTTP requests of the **frontend**.*

    Add to your local **hosts** file the following row:

        127.0.0.1   api.form-builder.com form-builder.com

    Back to **backend** folder, in this root backend directory, look for the **.env.local** template configuration file.

    Then, copy it as **.env** file name (with the same directory).

        cp .env.local .env

    This is the real configuration file of this machine.

    Now, edit it by enter the absolute path (with no aliases like **~**) to **key.pem** and **cert.pem** ssl secret files.

    Write your postgres password, if you don't know/remmember it, you can run the following commands:

        sudo -u postgres psql
        \password

    The enter your new postgres password...

    Once you finish, quit by:

        \q

    Now, you need to create the backend database:

        sudo -u postgres psql
        CREATE DATABASE form_builder;
        \q

    Install project dependencies:

        npm i

    Create the database tabels:

        sudo -u postgres psql form_builder < ./src/dal/psql/scripts/create.sql

    Optional, you can create some mock metadata to the empty database tables (as mention in the task description section in the root README.md file):

        sudo -u postgres psql form_builder < ./src/dal/psql/scripts/meta.sql

    Finally, you can run the Backend API by executing:

        npm start

    The Backend API is now running!
