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

router.get('/searching/:limitNum/:name/:length', (req, res) => {
    const name = req.params.name;
    const limitNum = req.params.limitNum;
    const lengthOfDesc = req.params.length;
    const data = productDB.searchObject(limitNum, name);
    data.then((response) => {
        const desc = response[0]['description']
        const description = desc.slice(0, lengthOfDesc)
        const mailData = {
            'product_id': response[0]['product_id'],
            'name': response[0]['name'],
            'description': description,
            'price': response[0]['price'],
            'discounted_price': response[0]['discounted_price'],
            'thumbnail': response[0]['thumbnail']
        }
        res.json(mailData);
    })
    .catch((err) => {
        console.log(err);
        res.send(err)
    })
})

module.exports = router;