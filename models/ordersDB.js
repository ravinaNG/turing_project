const knex = require('../knexFile');

const joinedData = () => {
    return knex('product')
    .join('saveForLater', 'saveForLater.product_id', '=', 'product.product_id')
    .select('product.price', 'saveForLater.quantity')
}

const orders = (data) => {
    return knex('orders').insert(data);
};

const order_id = (id) => {
    return knex('orders').select('order_id').where('orders.order_id', id)
}

const dataFromProduct = (id) => {
    return knex('product')
    .join('saveForLater', 'saveForLater.product_id', '=', 'product.product_id')
    .select('product.product_id', 'product.name', 'product.price', 'saveForLater.quantity', 'saveForLater.attributes', 'saveForLater.item_id')
    .where('product.product_id', id)
}

const insertingData = (data) => {
    return knex('order_detail').insert(data);
}

const inCustomer = () => {
    return knex.select('*').from('orders');
}

const shortDetails = (id) => {
    return knex.select('*').from('orders').where('orders.order_id', id);
}
module.exports = {orders, joinedData, order_id, dataFromProduct, insertingData, insertingData, inCustomer, shortDetails}
