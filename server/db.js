const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres", 
    password: "1288",
    host: "localhost",
    port: 5324, 
    database: 'perntodo'
});


module.exports = pool;
