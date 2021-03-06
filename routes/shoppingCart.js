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

router.post('/add', (req, res) => {
    const data = {
        "product_id": req.body.product_id,
        "item_id": req.body.item_id,
        "cart_id": req.body.cart_id,
        "attributes": req.body.attributes,
        "quantity": req.body.quantity,
        "added_on": new Date()
    }
    const shoppingCart = shoppingCartDB.shoppingCartPost(data);
    shoppingCart.then((response) => {
        res.json(response);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})

router.get('/:cart_id', (req, res) => {
    const cart_id = req.params.cart_id;
    const data = shoppingCartDB.cart_id(cart_id);
    data.then((response) => {
        const price = response[0]['price'];
        const quantity = response[0]['quantity'];
        response[0]['sabtotal'] = price * quantity;
        console.log(response);
        res.json(response);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    })
})

router.get('/moveToCart/:item_id', (req, res) => {
    const item_id = req.params.item_id;
    const data = shoppingCartDB.data(item_id);
    const moveToCart = shoppingCartDB.moveToCart(data);
    const deleteData = shoppingCartDB.deleteData(item_id)
    deleteData.then((response) => {
        console.log(response)
        res.json(response);
    })
    .catch((err) => {
        console.log(err)
        res.send(err)
    })
})

router.get('/totalAmount/:cart_id', (req, res) => {
    const cart_id = req.params.cart_id;
    const amounts = shoppingCartDB.totalAmount(cart_id);
    amounts.then((response) => {
        totalAmount = response[0]['price'] * response[0]['quantity']
        res.json(totalAmount);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})

router.get('/saveForLater/:item_id', (req, res) => {
    const item_id = req.params.item_id;
    const data = shoppingCartDB.shopping_cart2(item_id);
    const insertingData = shoppingCartDB.saveForLater(data);
    insertingData.then((response) => {
        const deleteData = shoppingCartDB.delShoppingCartData(item_id);
        deleteData.then((resp) => {
            res.json(resp);
        })
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
})

router.get('/getSaved/:cart_id', (req, res) => {
    const cart_id = req.params.cart_id;
    const data = shoppingCartDB.getSaved(cart_id);
    data.then((resp) => {
        res.json(resp);
    })
    .catch((err) => {
        res.send(err);
    })
})


router.put('/update/:item_id', (req, res) => {
    const id = req.params.item_id;
    const myData = shoppingCartDB.update(id);
    myData.then((data) => {
        const subtotal = data[0]['price'] * data[0]['quantity'];
        data[0]['subtotal'] = subtotal;
        console.log(data);
        res.json(data);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.delete('/removeProduct/:item_id', (req, res) => {
    const item_id = req.params.item_id;
    const removedData = shoppingCartDB.removeProduct(item_id);
    removedData.then((resp) => {
        res.json(resp);
    })
    .catch((err) => {
        res.send(err);
    })
})

router.delete('/empty/:cart_id', (req, res) => {
    const cart_id = req.params.cart_id;
    const emptyData = shoppingCartDB.empty(cart_id);
    emptyData.then((resp) => {
        res.json(resp);
    })
    .catch((err) => {
        res.send(err);
    })
})
module.exports = router;