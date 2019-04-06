const { Pool } = require('pg');

const CONNECTION_STRING = process.env.DATABASE_URL ||'35.230.96.183';
const SSL = process.env.NODE_ENV === 'production';


class Database {

    constructor (USERNAME, HOST_URL, DATABASE_NAME, PASSWORD, PORT) {
        this.host = HOST_URL;
        this._pool = new Pool({
            user: USERNAME,
            host: HOST_URL,
            database: DATABASE_NAME,
            password: PASSWORD,
            port: PORT
        });

        this._pool.on('error', (err, client) => {
            console.error('Unexpected error on idle PostgreSQL public', err);
            process.exit(-1);
        });
    }

    query () {
        this._pool.connect((err, client, done) => {
            return new Promise((resolve, reject) => {
                fetch(this.host, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json/',
                        'x-api-key': GRAPHQL_ACCESS_KEY
                    },
                    body: JSON.stringify({ query, variables}),
                }).then((response) => resolve(response.json()))
            });
        });
    }

    end () {
        this._pool.end();
    }
}

module.exports = new Database();