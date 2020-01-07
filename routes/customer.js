const express = require('express');
const router = express.Router();
const customerDB = require('../models/customerDB');

router.post('/customer', (req, res) => {
    data = {
        name: req.body.name,
        customer_id: req.body.customer_id,
        email: req.body.email,
        password: req.body.password,
        address_1: req.body.address_1,
        mob_phone: req.body.mob_phone,
        city: req.body.city
    };
    const sent_data = customerDB.customerPost(data);
    sent_data.then((response) =>{
        res.json('data hase inserted...')
    })
    .catch((err) =>{
        console.log(err);
        res.send(err)
    });
})

module.exports = router;