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

router.get('/searching/:limitNum/:name', (req, res) => {
    const name = req.params.name;
    const limitNum = req.params.limitNum;
    const data = productDB.searchObject(limitNum, name);
    data.then((response) => {
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.send(err)
    })
})

module.exports = router;