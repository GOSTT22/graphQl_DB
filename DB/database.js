const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    database: 'bank',
    user: 'postgres',
    password: 'root'
});

async function query(sql, params) {
    const client = await pool.connect();
    try {
        return client.query(sql, params);
    } catch (err) {
        console.log(err);
    } finally {
        client.release();
    }
}

module.exports = query;