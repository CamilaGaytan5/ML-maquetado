const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.post('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/views/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/views/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.listen(PORT, () => { console.log( `
Servidor escuchando en el puerto ${PORT}
https://localhost:${PORT}`);
});


