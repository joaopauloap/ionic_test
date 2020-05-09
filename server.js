var port = process.env.PORT || 5000;

const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('*', function(req,res){
    res.send(`<div style="text-align:center;"><h2>ERRO 404</h2><h3>NÃO ENCONTRADO!<h3></div>`);
    console.log('404')
})

console.log(`Server Running on port ${port} !`);
app.listen(port);

