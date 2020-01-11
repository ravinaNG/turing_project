const express = require('express');
const app = express();
app.use(express.json());

const deparments = require("./routes/department");
app.use("/deparments",deparments);

const categories = require('./routes/categories');
app.use('/categories', categories);

const attributes = require('./routes/attributes');
app.use('/attributes', attributes);

const product = require('./routes/product');
app.use('/products', product);

const customer = require('./routes/customer');
app.use('/customers', customer);

app.listen(7000, () => {
    console.log('server is running....')
});
