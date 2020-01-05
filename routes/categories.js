const express = require('express');
const router = express.Router();
const categoriesDB = require('../models/categoriesDB')

router.get('/category', (req,res) => {
    const data = categoriesDB.selectObjects();
    data.then((response) => {
        res.json(response)
    })
    .catch((err) => {
        res.send(err)
    })
})

// by id
router.get('/category/:id', (req,res) => {
    const id = req.params.id;
    const data = categoriesDB.selectObjectById(id);
    data.then((response) => {
        res.json(response)
    })
    .catch((err) => {
        res.send(err)
    })
})

// fourth task using join method
router.get('/categories/inProduct/:id', (req, res) => {
    const id = req.params.id;
    const data = categoriesDB.usingJoinSelectObj(id);
    data.then((response) => {
        res.json(response)
    })
    .catch((err) => {
        console.log(err);
        
    })
})

// fifth task
router.get('/categories/inDepartment/:id', (req, res) => {
    const id = req.params.id;
    const data = categoriesDB.objByOtherId(id);
    data.then((response) => {
        res.json(response);
    })
    .catch((err) =>{
        console.log(err);
        res.send(err);   
    })
})

module.exports = router