const knex = require('../knexFile');

const generateUniqueId = () => {
    return knex.select('*')
    .from('shipping_region')
}

// const add = (id) => {
//     return knex('product')
//     .select('product.product_id', 'image', 'name', 'price')
//     .where('product.product_id', id)
// }

const shoppingCartPost = (data) => {
    return knex('shopping_cart').insert(data);
}

const cart_id = (id) => {
    return knex('shopping_cart')
    .join('product', 'shopping_cart.product_id', '=', 'product.product_id')
    .select('shopping_cart.item_id', 'shopping_cart.attributes', 'shopping_cart.quantity', 'product.product_id', 'product.name', 'product.price', 'product.image')
    .where('shopping_cart.cart_id', id)
}

const data = (id) => {
    return knex.select('*').from('shopping_cart').where('shopping_cart.item_id', id);
}

const moveToCart = (data) => {
    return knex('shopping_cart2').insert(data);
}

const deleteData = (id) => {
    return knex('shopping_cart')
    .where('shopping_cart.item_id', id)
    .del()
}

const totalAmount = (id) => {
    return knex('shopping_cart')
    .join('product', 'product.product_id', '=', 'shopping_cart.product_id')
    .select('shopping_cart.quantity', 'product.price')
    .where('cart_id', id)
}

const shopping_cart2 = (id) => {
    return knex.select('*').from('shopping_cart2').where('shopping_cart2.item_id', id);
}

const saveForLater = (data) => {
    return knex('saveForLater').insert(data);
}

const delShoppingCartData = (id) => {
    return knex('saveForLater')
    .where('saveForLater.item_id', id)
    .del()
}

module.exports = {generateUniqueId, shoppingCartPost, cart_id, data, moveToCart, deleteData, totalAmount, shopping_cart2, saveForLater, delShoppingCartData}