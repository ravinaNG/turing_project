const express = require('express');
const app = express();

const deparments = require("./routes/department");
app.use("/deparments",deparments);

const product = require('./routes/product');
app.use('/products', product);

const categories = require('./routes/categories');
app.use('/categories', categories);

const attributes = require('./routes/attributes');
app.use('/attributes', attributes);

app.listen(7000, () => {
    console.log('server is running....')
});
