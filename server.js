const express = require('express');
const app = express();

const deparments = require("./routes/department")
app.use("/deparments",deparments)

const product = require('./routes/product')
app.use('/products', product)


app.listen(7000, () => {
    console.log('server is running....')
});
