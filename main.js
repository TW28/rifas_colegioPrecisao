const express = require('express');
const app = express();
const porta = 3000;


var data = new Date();
var dia  = data.getDate();    

// Enviar arquivos estáticos
app.use(express.static('public'));


if(dia == 28){
    app.get('/', (req, res) => {
        res.sendFile(__dirname + "/html/index_dia28.html");
    });
}

else{
    app.get('/', (req, res) => {
        res.sendFile(__dirname + "/html/index.html");
    });
}

app.listen(porta, () => {console.log('Server Rodando')});