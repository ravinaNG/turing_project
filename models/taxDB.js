const knex = require('../knexFile');

const tax = () => {
    return knex.select('*').from('tax');
}

const id = (tax_id) => {
    return knex.select('*').from('tax').where('tax.tax_id', tax_id)
}

module.exports = {tax, id}