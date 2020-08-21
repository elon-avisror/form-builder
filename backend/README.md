# Form-Builder API

## Backend Installation

1. Make sure you have installed dev dependencies:

    * [nodejs](https://nodejs.org/en/download/)
    * [typescript](https://www.npmjs.com/package/typescript))
    * [postgres](https://www.postgresql.org/download/)
    * [pgadmin4](https://www.pgadmin.org/download/) - Client tool (Optional)

2. Run the following commands:

    Mandatories:

        cd backend
        npm install
        sudo -u postgres psql form_builder < {RELATIVE_PATH}/src/dal/scripts/create.sql
        npm start

    Optional - Mock Metadata:

        sudo -u postgres psql form_builder < <relative-project-path>/src/dal/scripts/meta.sql

   Finally - Run the Backend API by executing:

        npm start

   And you are set!
