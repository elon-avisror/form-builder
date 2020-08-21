# Form-Builder API

## Backend Installation

1. Make sure you have installed dev dependencies:

    * [nodejs](https://nodejs.org/en/download/)
    * [typescript](https://www.npmjs.com/package/typescript)
    * [postgres](https://www.postgresql.org/download/)
    * [pgadmin4](https://www.pgadmin.org/download/) - Client tool (Optional)

2. Run the following commands:

    Configuration manners - look for the **.env.local** configuration file and copy it as **.env** file name (with the same directory). Add to your local **hosts** file the following row:

        127.0.0.1   api.form-builder.com form-builder.com

    Creating DB:

        sudo -u postgres psql
        \c form_builder
        \q

    Installations:

        cd backend
        npm install
        sudo -u postgres psql form_builder < {RELATIVE_PATH}/src/dal/scripts/create.sql
        npm start

    Optional - Mock Metadata:

        sudo -u postgres psql form_builder < {RELATIVE_PATH}/src/dal/scripts/meta.sql

   Finally - Run the Backend API by executing:

        npm start

   And you are set!
