const express = require('express');
const router = express.Router();
const taxDB = require('../models/taxDB');

router.get('/tax', (req, res) => {
    const objectArray = taxDB.tax();
    objectArray.then((resp) => {
        res.json(resp);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})

router.get('/tax/:tax_id', (req, res) => {
    const tax_id = req.params.tax_id;
    const idProduct = taxDB.id(tax_id);
    idProduct.then((resp) => {
        res.json(resp);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})

module.exports = router;