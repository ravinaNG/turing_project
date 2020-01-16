const express = require('express');
const router = express.Router();
const ordersDB = require('../models/ordersDB');
const jwt = require('jsonwebtoken');

router.post('/order', (req, res) => {
    const allTokens = req.headers.cookie;
    const tokenList = allTokens.split('=undefined; ')
    const lastToken = tokenList[tokenList.length - 1];
    const priceNquantity = ordersDB.joinedData();
    // console.log(priceNquantity);
    // jwt.verify(lastToken, 'Ravina', () => {
    //     const dataToPost = {
    //         "order_id": req.body.order_id,
    //         "total_amount": priceNquantity[0]['quantity'] * priceNquantity[0]['price'],
    //         "created_on": Date,
    //         "shipped_on": Date,
    //         "status": req.body.status,
    //         "comments": req.body.comments,
    //         "customer_id": req.body.customer_id,
    //         "auth_code": req.body.auth_code,
    //         "reference": req.body.reference,
    //         "shipping_id": req.body.shipping_id,
    //         "tax_id": req.body.tax_id 
    //     }
    //     const postedData = ordersDB.orders(dataToPost);
        priceNquantity.then((resp) => {
            console.log(resp);
            res.json(resp);
        })
        .catch((err) => {
            res.send(err);
        })
    })
})

module.exports = router;