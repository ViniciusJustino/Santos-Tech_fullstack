const mysql = requise('mysql2/promisse');

class database{
    pool;
    dbInstance;

    constructor(){
        if(!database.dbInstance)
        {
            this.pool = mysql.createPool({
                host: 'localhost',
                user: 'root',
                password: '123456',
                database: 'master',
                waitForConnections: true
            });
        } 

        return database.dbInstance;
    }

     conexao() {
        return this.pool;        
    }

}

const dbInstance = database();

Object.freeze(dbInstance);

module.exports = dbInstance;