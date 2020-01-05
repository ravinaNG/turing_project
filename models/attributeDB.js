const knex = require('../knexFile');

const selectObjects = () => {
    return knex.select('*').from('attribute')
}

// by id
const getObjectsById = (id) => {
    return knex.select('*')
    .from('attribute')
    .where('attribute.attribute_id', id)
}

// using join method 
const usingJoinGetObjById = (id) => {
    return knex('attribute_value')
    .select('attribute_value.attribute_value_id', 'value')
    .join('attribute', 'attribute.attribute_id', '=', 'attribute_value.attribute_id')
    .where('attribute_value.attribute_id', id)
}

// joining three tables
const byId = (id) => {
    return knex('attribute_value')
    .join('product_attribute', 'product_attribute.attribute_value_id', '=', 'attribute_value.attribute_value_id')
    .join('attribute', 'attribute.attribute_id', '=', 'attribute_value.attribute_id')
    .select('attribute_value.attribute_value_id', 'value', 'attribute.name')
    .where('product_attribute.product_id', id)
}

module.exports = {selectObjects, getObjectsById, usingJoinGetObjById, byId}
