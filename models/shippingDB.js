const knex = require('../knexFile');

const regions = () => {
    return knex('shipping')
    .join('shipping_region', 'shipping_region.shipping_region_id', '=', 'shipping.shipping_region_id')
    .select('shipping_region.shipping_region_id', 'shipping_region.shipping_region')
}

const listOfObjects = (id) => {
    return knex.select('*').from('shipping').where('shipping.shipping_region_id', id)
}

module.exports = {regions, listOfObjects}