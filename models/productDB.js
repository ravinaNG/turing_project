const knex = require('../knexFile');

const listOfObjects = () => {
    return knex.select('*').from('product');
};

const searchObject = (limitNum, name) => {
    return knex.select('*')
    .from('product')
    .limit(limitNum)
    .where('product.name', 'like','%', +name+ '%')
}

const byProductId = (id) =>{
    return knex.select("*")
    .from('product')
    .where('product.product_id', id)
}

module.exports = {listOfObjects, searchObject, byProductId};