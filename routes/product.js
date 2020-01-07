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

router.get('/product/:id', (req, res) => {
    const product_id = req.params.id;
    const data = productDB.byProductId(product_id);
    data.then((response) => {
        res.json(response);
    }).catch((err) => {
        res.send(err);
    })
})

router.get('/inCategory/:id', (req, res) =>{
    const category_id = req.params.id;
    const data = productDB.byCategoryId(category_id);
    data.then((response) =>{
        const mainData = {
            'product_id': response[0]['product_id'],
            'name': response[0]['name'],
            'description': response[0]['description'],
            'price': response[0]['price'],
            'discounted_price': response[0]['discounted_price'],
            'thumbnail': response[0]['thumbnail']
        };
        res.json(mainData);
    })
    .catch((err) =>{
        res.send(err);
    })
})

router.get('/inDepartment/:id', (req, res) =>{
    const department_id = req.params.id;
    const data = productDB.byDepartmentId(department_id);
    data.then((response) =>{
        const mainData = {
            'product_id': response[0]['product_id'],
            'name': response[0]['name'],
            'description': response[0]['description'],
            'price': response[0]['price'],
            'discounted_price': response[0]['discounted_price'],
            'thumbnail': response[0]['thumbnail']
        }
        res.json(mainData);
    })
    .catch((err) => {
        res.send(err)
    })
})

router.get('/product/:id/details', (req, res) => {
    const product_id = req.params.id;
    const data = productDB.details(product_id);
    data.then((response) =>{
        res.json(response);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.get('/product/:id/location', (req, res) => {
    const product_id = req.params.id;
    const data = productDB.depatmCateg(product_id);
    data.then((response) => {
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})


router.post('/productPost/:id',(req,res)=>{
    review = {
        "customer_id": req.body.customer_id,
        "review":req.body.review,
        "rating":req.body.rating,
        "created_on":req.body.created_on,
        'product_id': req.params.id 
    }
    var data = productDB.inserting(review);
    data.then((response)=>{
        res.json('data sent Bhai....');
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
    
})


module.exports = router;