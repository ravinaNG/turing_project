const knex = require('../knexFile');

const customerPost = (data) => {
    return knex('customer').insert(data);
}

const customerPut = (id, data) => {
    return knex('customer')
    .update(data)
    .where('customer.customer_id', id)
}

const customerLogin = () => {
    return knex.select('customer.name', 'customer.email', 'customer.password')
    .from('customer')
}

module.exports = {customerPost, customerPut, customerLogin};