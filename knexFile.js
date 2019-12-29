const knex = require ("knex");

const connection = {
    client : "mysql",
    connection : {
        host : "localhost",
        user : "root",
        password : "Ravina@123",
        database : "tshirts"
    }
};

module.exports = knex(connection);

