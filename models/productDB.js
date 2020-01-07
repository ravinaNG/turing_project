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

const details = (id) =>{
    return knex.select("*")
    .from('product')
    .where('product_id', id)
}

const depatmCateg = (id) => {
    return knex.from('product')
    .join('category', 'category.category_id', '=', 'product.product_id')
    .join('department', 'department.department_id', '=', 'category.department_id')
    .select('category.category_id', 'category.name as category_name', 'department.department_id', 'department.name as department_name')
    .where('product.product_id', id)
}

module.exports = {listOfObjects, searchObject, byProductId, byCategoryId, byDepartmentId, details, depatmCateg};