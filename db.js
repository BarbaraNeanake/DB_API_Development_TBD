const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "GRB_Database_Barbs",
    password: "230405",
    port: 5432,
});

module.exports = pool;