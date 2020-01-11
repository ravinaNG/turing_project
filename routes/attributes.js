const express = require('express');
const router = express.Router();
router.use(express.json());
const attributeDB = require('../models/attributeDB')

router.get('/attribute', (req, res) => {
    const data = attributeDB.selectObjects();
    data.then((response) => {
        res.json(typeof(response));
    })
    .catch((err) =>{
        console.log(err);
        res.send(err);
    })
})

// by id
router.get('/attribute/:id', (req, res) => {
    const id = req.params.id;
    const data = attributeDB.getObjectsById(id)
    data.then((response) => {
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})

// using join method 
router.get('/attribute/values/:attribute_id', (req, res) => {
    const id = req.params.attribute_id;
    const data = attributeDB.usingJoinGetObjById(id);
    data.then((response) => {
        res.json(response);
    })
    .catch((err) =>{
        console.log(err);
        res.send(err);
    })
})

// joining three tables
router.get('/attribute/inProduct/:product_id', (req, res) => {
    const id = req.params.product_id;
    const data = attributeDB.byId(id); 
    data.then((response) => {
        res.json(response);
    })
    .catch((err) =>{
        console.log(err);
        res.send(err);
    })
})
console.log('jhfhfjf');

module.exports = router;