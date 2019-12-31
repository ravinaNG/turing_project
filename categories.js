const express = require('express');
const app = express();
const knex = require('./knexFile');

app.get('/category', (req,res) => {
    knex.select('*')
    .from("category")
    .then((data) => {
        res.send(data)
    })
})

app.listen(3000, () => {
    console.log('Server is active....')
})