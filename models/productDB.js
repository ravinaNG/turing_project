const knex = require('../knexFile');

const listOfObjects = () => {
    return knex.select('*').from('product');
};

const searchObject = (limitNum, name) => {
    return knex.select('*')
    .from('product')
    .limit(limitNum)
    .where('product.name', 'like', '%' +name+ '%')
}

module.exports = {listOfObjects, searchObject};