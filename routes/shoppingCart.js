const express = require('express');
const router = express.Router();
const shoppingCartDB = require('../models/shoppingCartDB');
const randomString = require('random-string');

router.get('/generateUniqId', (req, res) => {
    const data = shoppingCartDB.generateUniqueId();
    const uniqueId = randomString();
    data.then((response) => {
        console.log(response);
        res.json(uniqueId);
    }).catch((err) =>{
        console.log(err);
        res.send(err);
    })
})

module.exports = router;