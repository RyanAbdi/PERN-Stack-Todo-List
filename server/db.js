const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "You have to put your own password here",
    host: "localhost",
    port: 5432,
    database: "prentodo"
});

module.exports = pool;