const knex = require('../knexFile');

const joinedData = () => {
    return knex('product')
    .join('saveForLater', 'saveForLater.product_id', '=', 'product.product_id')
    .select('product.price', 'saveForLater.quantity')
}

const orders = (data) => {
    return knex('orders').insert(data);
};

module.exports = {orders, joinedData}
