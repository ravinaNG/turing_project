const knex = require('../knexFile');

const customerPost = (data) => {
    return knex('customer').insert(data);
}

module.exports = {customerPost};