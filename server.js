var express = require('express');
var app = express();

var deparments = require("./routes/department")
app.use("/deparments",deparments)

app.listen(7000, () => {
    console.log('server is running....')
});
