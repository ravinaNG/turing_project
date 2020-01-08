const knex = require('../knexFile');

const customerPost = (data) => {
    return knex('customer').insert(data);
}

const customerPut = (id, data) => {
    return knex('customer')
    .update(data)
    .where('customer.customer_id', id)
}

module.exports = {customerPost, customerPut};