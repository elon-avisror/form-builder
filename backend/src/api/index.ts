import * as express from 'express';
import * as expressSession from 'express-session';
import { readFileSync } from 'fs';
import { Server } from 'http';
import * as https from 'https';
import * as cors from 'cors';
import * as passport from 'passport';

export class FormBuilderAPI {
    app: express.Application;
    host: string;
    port: number;

    private _server: Server;
    private _ssl: { key: string, cert: string };

    constructor(host: string, port: string) {
        this.host = host;
        this.port = parseInt(port);

        this.app = express();
    }

    setSSL(ssl: { key: string, cert: string }) {
        this._ssl = ssl;
    }

    launch(): Promise<boolean> {
        if (this._server)
            throw new Error('Attempt to launch an already running instance...');

        return new Promise((resolve) => {
            if (this._ssl) {
                const options = {
                    key: readFileSync(this._ssl.key),
                    cert: readFileSync(this._ssl.cert)
                };
                this._server = https.createServer(options, this.app).listen(this.port, this.host, () => {
                    resolve(true);
                });
            } else {
                this._server = this.app.listen(this.port, this.host, () => {
                    resolve(true);
                });
            }
        });
    }

    setAllowedOrigins(allowedOrigins: string[]) {
        this.app.use(cors({
            origin: (o, c) => { !o || allowedOrigins.indexOf(o) >= 0 ? c(null, true) : c(new Error('400 Bad request')) },
            credentials: true
        }));
    }

    session(name: string, secret: string, store?: any) {
        this.app.use(expressSession({
            name, secret, store,
            resave: false,
            saveUninitialized: false,
            cookie: { 
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                maxAge: 30 * (1000 * 60 * 60 * 24)
            }
        }));

        // Setup passport
        passport.serializeUser(function(user, done) { done(null, user); });
        passport.deserializeUser(function(user, done) { done(null, user); });
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    setRouter(path: string, router: express.Router) {
        this.app.use(path, router);
    }

    closeServer() {
        if (this._server) {
            this._server.close();
            this._server = undefined;
        }
    }
};

export function getResponseObject(err: string = 'Something went wrong', data?: any): APIResponse {
    if (data === null || data === undefined)
        data = false;
    return err ? { ok: false, error: err } : { ok: !!data, data };
};

export interface APIResponse {
    ok: boolean;
    data?: any;
    error?: string;
};