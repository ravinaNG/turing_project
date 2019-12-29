const express = require('express');
const app = express();

const connection = {
    client : "mysql",
    connection : {
        host : "localhost",
        user : "root",
        password : "Ravina@123",
        database : "tshirts"
    }
};

let knex = require ("knex")(connection);

app.get('/departments', (req,res) => {
    knex.select("*").from("department").then((data) => {
        res.send(data)
    })
})

app.listen(7000, () => {
    console.log('server is running....')
});