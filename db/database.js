const { createClient } = require('@supabase/supabase-js')
require('dotenv').config();

class database{

    constructor()
    {
        if(!database.instance)
        {
            this.client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

            database.instance = this;
        }

        return database.instance;
    }

     client() {
        return this.client;        
    }

}

const _instance = new database();

Object.freeze(_instance);

module.exports = _instance;