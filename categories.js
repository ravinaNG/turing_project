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
app.get('/category/:id', (req,res) => {
    const id = req.params.id;
    knex.select('*')
    .from("category")
    .where('category.category_id',id)
    .then((data) => {
        res.send(data)
    })
})

// fourth task using join method
app.get('/categories/inProduct/:id', (req, res) => {
    const id = req.params.id;
    knex('category')
    .select('category.category_id', 'department_id', 'name')
    .join('product_category', 'category.category_id', '=', 'product_category.category_id')
    .where('product_category.product_id', id)
    .then((data) => {
        res.send(data)
    })
})

// fifth task
app.get('/categories/inDepartment/:id', (req, res) => {
    const id = req.params.id;
    knex('category')
    .where('category.department_id', id)
    .select('category.category_id', 'department_id', 'name', 'description')
    .then((data) => {
        res.send(data)
    })
})

app.listen(7000, () => {
    console.log('Server is active....')
})