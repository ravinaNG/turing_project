const knex = require('../knexFile');

const selectObjects = () => {
    return knex.select('*')
    .from("category")
};

// by id
const selectObjectById = (id) => {
    return knex.select('*')
    .from("category")
    .where('category.category_id',id)
};

// using join method
const usingJoinSelectObj = (id) => {
    return knex.select('*')
    .from('category')
    .join('product_category', 'category.category_id', '=', 'product_category.category_id')
    .where('product_category.product_id', id)
};

// by department id
const objByOtherId = (id) => {
    return knex.select('category.category_id', 'department_id', 'name', 'description')
    .from('category')
    .where('category.department_id', id)
};

module.exports = {selectObjects, selectObjectById, usingJoinSelectObj, objByOtherId}
