const express = require('express');
const router = express.Router();
const productDB = require('../models/productDB');

router.get('/product', (req, res) => {
    const data = productDB.listOfObjects();
    data.then((response) => {
        res.json(response)
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})

router.get('/searching/:name', (req, res) => {
    const name = req.params.name;
    const data = productDB.searchObject(name);
    data.then((response) => {
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.send(err)
    })
})

module.exports = router;