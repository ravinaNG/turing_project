const express = require('express');
const router = express.Router();
const shippingDB = require('../models/shippingDB');

router.get('/region', (req, res) => {
    const data = shippingDB.regions()
    data.then((resp) => {
        res.json(resp);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.get('/region/:shipping_region_id', (req, res) => {
    const id = req.params.shipping_region_id;
    const data = shippingDB.listOfObjects(id);
    data.then((resp) => {
        res.json(resp);
    })
    .catch((err) => {
        res.send(err); 
    })
})

module.exports = router;