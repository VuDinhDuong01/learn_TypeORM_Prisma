const  { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Anhyeuem',
    database: 'restaurants',
});
module.exports = {
     query: (text, params) => pool.query(text, params)
}