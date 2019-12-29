const express = require('express');
const app = express();
const knex = require('./knexFile');

app.get('/departments', (req,res) => {
    knex.select('*').from("department").then((data) => {
        res.send(data)
    })
})

// by id

app.get('/departments/:id', (req,res) => {
    // let department_id = req.params.id
    knex.select("*")
    .from('department')
    .where('department.department_id', req.params.id)
    .then((data) => {
        res.send(data)
    })
});

app.listen(7000, () => {
    console.log('server is running....')
});