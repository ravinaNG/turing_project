const knex = require('./knexFile');

knex.schema.hasTable('saveForLater').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('saveForLater', (table) => {
            table.integer('item_id');
            table.integer('cart_id');
            table.integer('product_id');
            table.string('attributes');
            table.integer('quantity');
            table.integer('buy_now');
            table.string('added_now');
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the query")
        })
    }
    return console.log('this name of table has created!')
})
