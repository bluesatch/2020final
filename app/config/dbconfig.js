const mysql = require('mysql2');
const db = 'daddybug_db';
// password will be stored later

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: db
});

module.exports = pool;

// next routeRoutes.js