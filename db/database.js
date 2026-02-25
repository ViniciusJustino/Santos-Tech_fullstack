const mysql = requise('mysql2/promisse');

class database{
    constructor(){
        if(!database.dbInstance)
        {
            
        } 
    }

}

const dbInstance = database();

Object.freeze(dbInstance);

module.exports = dbInstance;