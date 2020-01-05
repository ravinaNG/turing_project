const knex = require('../knexFile');

const listOfObjects = () => {
    return knex.select('*').from('product');
};

const searchObject = (name) => {
    knex.select('*').from('product').where('product.name', 'like', '%' +name+ '%')
}

module.exports = {listOfObjects};