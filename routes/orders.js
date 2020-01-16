const express = require('express');
const router = express.Router();
const ordersDB = require('../models/ordersDB');
const jwt = require('jsonwebtoken');

router.post('/order', (req, res) => {
    const allTokens = req.headers.cookie;
    const tokenList = allTokens.split('=undefined; ')
    const lastToken = tokenList[tokenList.length - 1];
    const priceNquantity = ordersDB.joinedData();
    priceNquantity.then((priceNquantity) => {
        jwt.verify(lastToken, 'Ravina', () => {
            const total_amount = priceNquantity[0]['quantity'] * priceNquantity[0]['price']
            const dataToPost = {
                "order_id": req.body.order_id,
                "total_amount": total_amount,
                "created_on": new Date,
                "shipped_on": new Date,
                "status": req.body.status,
                "comments": req.body.comments,
                "customer_id": req.body.customer_id,
                "auth_code": req.body.auth_code,
                "reference": req.body.reference,
                "shipping_id": req.body.shipping_id,
                "tax_id": req.body.tax_id
            }
            const postedData = ordersDB.orders(dataToPost);
            postedData.then((resp) => {
                console.log('Done bhai maze kar ab ....')
                res.json(resp);
            })
            .catch((err) =>{
                res.send(err);
            })
        console.log(resp);
        res.json(resp);
        })
        .catch((err) => {
            res.send(err);
        })
    })
});

router.get('/order_id/:id', (req, res) => {
    const allTokens = req.headers.cookie;
    const tokenList = allTokens.split('=undefined; ')
    const firstToken = tokenList[0];
    const order_id = req.params.id;
    const conformed_id = ordersDB.order_id(order_id);
    const dataToPost = ordersDB.dataFromProduct(conformed_id);
    dataToPost.then((resp) => {
        jwt.verify(firstToken, 'Ravina', () => {
            const id = conformed_id;
            const product_id = resp[0]['product_id'];
            const attributes = resp[0]['attributes'];
            const product_name = resp[0]['name'];
            const quantity = resp[0]['quantity'];
            const unit_cost = quantity * resp[0]['price'];
            const item_id = resp[0]['item_id'];

            const dataToInsert = {
                "item_id": item_id,
                "order_id": id,
                "product_id": product_id,
                "attributes": attributes,
                "product_name": product_name,
                "quantity": quantity,
                "unit_cost": unit_cost,
            }

            const postedData = ordersDB.insertingData(dataToInsert);
            postedData.then((response) => {
                console.log("Injoy yourself");
                res.json(response);
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
            })
        })
    })
})

router.get('/inCustomer', (req, res) => {
    const allTokens = req.headers.cookie;
    const tokenList = allTokens.split('=undefined; ')
    const secondToken = tokenList[1];

    jwt.verify(secondToken, 'Ravina', () => {
        const data = ordersDB.inCustomer();
        data.then((resp) => {
            res.json(resp);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
    })
})

router.get('/shortDetail/:id', (req, res) => {
    const order_id = req.params.id;
    const allTokens = req.headers.cookie;
    const tokenList = allTokens.split('=undefined; ')
    const secondToken = tokenList[1];

    jwt.verify(secondToken, 'Ravina', () => {
        const idWiseData = ordersDB.shortDetails(order_id);
        idWiseData.then((resp) => {
            res.json(resp);
        })
        .catch((err) => {
            res.send(err);
        })
    })
})

module.exports = router;