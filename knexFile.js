const express = require('express');
const app = express();
// appexpress.json()
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : 'ravina@123',
        database : 'tshirts',
        insecureAuth : true
    }
});

app.get('/hello', function(req, res){
    // var id = req.body.parmars??
    // knex('department')
    knex.select("name") .from('department')
    .then((data)=>{
        res.send(data)

    })
    .catch((err)=>{
        res.send(err)
    })
});

app.listen(3000, function(){
    console.log('server is running....');
})