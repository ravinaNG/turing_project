const knex = require('../knexFile');

const generateUniqueId = () => {
    return knex.select('*')
    .from('shipping_region')
}

module.exports = {generateUniqueId}