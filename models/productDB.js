const knex = require('../knexFile');

const listOfObjects = () => {
    return knex.select('*').from('product');
}

module.exports = {listOfObjects}