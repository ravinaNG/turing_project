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

module.exports = router;