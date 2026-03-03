const mysql = require('mysql2/promise');

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'master',
            waitForConnections: true
        });
    }

    conexao() {
        return this.pool;
    }
}

const dbInstance = new Database();
Object.freeze(dbInstance);

module.exports = dbInstance;
