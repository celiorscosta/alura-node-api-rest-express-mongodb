const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Alura Curso de Node - API REST com Express e MongoDB</h1>');
});

app.listen(PORT, HOST);