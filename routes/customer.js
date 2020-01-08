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

router.put('/update/:id', (req, res) => {
    const customer_id = req.params.id;
    data = {
        customer_id: req.body.customer_id,
        name: req.body.name,
        email: req.body.email,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        city: req.body.city,
        region: req.body.region,
        postal_code: req.body.postal_code,
        country: req.body.country,
        shipping_region_id: req.body.shipping_region_id,
        day_phone: req.body.day_phone,
        eve_phone: req.body.eve_phone,
        mob_phone: req.body.mob_phone,
        credit_card: req.body.credit_card
    };
    const updateData = customerDB.customerPut(customer_id, data);
    updateData.then((response) => {
        res.json('data has updated.')
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    });
})

module.exports = router;