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

// by id

app.get('/category/:id'), (req, res) =>{
    // const id = req.params.id
    knex.select('*')
    .from('category')
    .where('category.category_id', id)
    .then((data) => {
        res.send(data)
    })
}

app.listen(3000, () => {
    console.log('Server is active....')
})