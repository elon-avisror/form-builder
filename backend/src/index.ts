import * as dotenv from 'dotenv';
import { FormBuilderAPI } from './api';
import { Postgres } from './dal';
import { FormBuilderServices, loadServices } from "./services";
import { FormRouter } from './api/form';
import { SubmissionRouter } from "./api/submission";

dotenv.config();
const {
    APP_HOST,
    APP_PORT,
    APP_ALLOWED_ORIGINS,
    APP_SSL_KEY,
    APP_SSL_CERT,

    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

async function FormBuilderCore() {
    // Init DALs
    console.log('[+] Initializing Data Access Layer...');
    const PostgresDAL = await Postgres({
        poolConfig: {
            host: DB_HOST,
            port: parseInt(DB_PORT),
            user: DB_USER,
            password: DB_PASS,
            database: DB_NAME
        }
    });
    // Init Services
    console.log('[+] Initializing Services...');
    const Services: FormBuilderServices = loadServices(PostgresDAL);

    // Setup API
    console.log('[+] Setting up the API...');
    const API = new FormBuilderAPI(APP_HOST, APP_PORT);
    if (APP_SSL_KEY && APP_SSL_CERT) {
        API.setSSL({ key: APP_SSL_KEY, cert: APP_SSL_CERT });
        console.log('[+] SSL enabaled.');
    }
    const allowedOrigins = (APP_ALLOWED_ORIGINS && APP_ALLOWED_ORIGINS.split(',')) || [];
    API.setAllowedOrigins(allowedOrigins);

    // Routers
    API.setRouter('/form', FormRouter(Services.Form));
    API.setRouter('/submission', SubmissionRouter(Services.Submission));
    
    await API.launch();
    
    console.log(`[+] API listening on ${API.host}:${API.port}`);
    return Services;
};

if (require.main === module) {
    FormBuilderCore()
        .then(async (FormBuilderCore: FormBuilderServices) => {
            console.log('[+] FormBuilderCore is running.');
        })
        .catch(err => console.error('[-] FormBuilderException', err));
}