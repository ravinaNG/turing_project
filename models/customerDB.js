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
    return knex.select('customer.email', 'customer.password')
    .from('customer')
}

const customerAddress = (id, data) => {
    return knex('customer')
    .update(data)
    .where('customer.customer_id', id)
}

const customerPutByJwt = (id, data) => {
    return knex('customer')
    .update(data)
    .where('customer.customer_id', id)
}

module.exports = {customerPost, customerPut, customerLogin, customerAddress, customerPutByJwt};