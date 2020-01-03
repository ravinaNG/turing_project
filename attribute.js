const express = require('express');
const app = express();
const knex = require('./knexFile');

app.get('/attributes', (req, res) => {
    knex.select('*').from('attribute').then((data) => {
        res.send(data);
    })
})

// by id
app.get('/attributes/:id', (req, res) => {
    const id = req.params.id;
    knex.select('*')
    .from('attribute')
    .where('attribute.attribute_id', id)
    .then((data) => {
        res.send(data);
    })
})

// using join method 
app.get('/attributes/values/:attribute_id', (req, res) => {
    const id = req.params.attribute_id;
    knex('attribute_value')
    .select('attribute_value.attribute_value_id', 'value')
    .join('attribute', 'attribute.attribute_id', '=', 'attribute_value.attribute_id')
    .where('attribute_value.attribute_id', id)
    .then((data) => {
        res.send(data);
    })
})

// joining three tables
app.get('/attributes/inProduct/:product_id', (req, res) => {
    const id = req.params.product_id;
    knex('attribute_value')
    .join('product_attribute', 'product_attribute.attribute_value_id', '=', 'attribute_value.attribute_value_id')
    .join('attribute', 'attribute.attribute_id', '=', 'attribute_value.attribute_id')
    .select('attribute_value.attribute_value_id', 'value', 'attribute.name')
    .where('product_attribute.product_id', id)
    .then((data) => {
        res.send(data);
    })
})

app.listen(8000, () => {
    console.log('Now I am ready go ahead....');
});