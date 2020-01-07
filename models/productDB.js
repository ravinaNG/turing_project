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

const byCategoryId = (id) => {
    return knex.select('*')
    .from('product')
    .join('product_category', 'product_category.product_id', '=', 'product.product_id')
    .where('product_category.product_id', id)
}

const byDepartmentId = (id) =>{
    return knex.select('*')
    .from('product')
    .join('department', 'department.department_id', '=', 'product.product_id')
    .where('department.department_id', id)
}

module.exports = {listOfObjects, searchObject, byProductId, byCategoryId, byDepartmentId};