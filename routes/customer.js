const express = require('express');
const router = express.Router();
const customerDB = require('../models/customerDB');
const jwt = require('jsonwebtoken');

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
        res.send('data hase inserted...')
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
        res.send('data has updated.')
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    });
})

router.post('/login', (req, res) => {
    let user_email = req.body.email
    let user_password =  req.body.password
    const data = customerDB.customerLogin();
    data.then((response) => {
        let index = 0;
       for(index; index<response.length; index++){
           if(response[index]['email']==user_email && response[index]['password'] == user_password){
                const token = jwt.sign({"user": response}, 'Ravina')
                res.cookie(token)
                res.send('Done bhai....')
           }
       }
        
    })
    .catch((err) => {
        console.log(err)
        res.send(err);
    })     
})  

router.put('/address', (req, res) => {
    const allTokens = req.headers.cookie;
    const tokenList = allTokens.split('=undefined; ');
    const lastToken = tokenList[tokenList.length-3]
    jwt.verify(lastToken, 'Ravina', ()=>{
        const customer_id = req.body.customer_id;
        const dataForUpdating = {
            "address_1":req.body.address_1,
            "address_2":req.body.address_2,
            "city":req.body.city,
            "region":req.body.region,
            "postal_code":req.body.postal_code,
            "country":req.body.country,
            "shipping_region_id":req.body.shipping_region_id
        }
        const date = customerDB.customerAddress(customer_id, dataForUpdating);
        date.then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.send(err)
        })
    })
})

router.put('/customer_jwt', (req, res) => {
    const allTokens = req.headers.cookie;
    const tokenList = allTokens.split('=undefined; ');
    const lastToken = tokenList[tokenList.length - 1];
    jwt.verify(lastToken, 'Ravina', () => {
        const customer_id = req.body.customer_id;
        const updating = {
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password,
            "day_phone": req.body.day_phone,
            "eve_phone": req.body.eve_phone,
            "mob_phone": req.body.mob_phone
        }
        const data = customerDB.customerPutByJwt(customer_id, updating);
        data.then((updatedData) => {
            res.json(updatedData);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
    })
})

router.put('/CreditCard', (req, res) => {
    const allTokens = req.headers.cookie;
    const tokenList = allTokens.split('=undefined; ');
    const lastToken = tokenList[tokenList.length - 1];
    jwt.verify(lastToken, 'Ravina', () => {
        const customer_id = req.body.customer_id;
        const updating = {
            "credit_card": req.body.credit_card
        }
        const data = customerDB.credit_card(customer_id, updating);
        data.then((updatedData) => {
            res.json(updatedData);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
    })
})

module.exports = router;