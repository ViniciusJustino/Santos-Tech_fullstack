const rotas = require('express');
const { usuario, admin} = require('./models/usuario');


const rota = rotas();

const porta = '8080';

const usuarios = [new usuario(1), new usuario(2), new usuario(3), new admin()];

rota.get('/', (req, res) => {
    res.send('<h1> Olá Mundo </h1>');
});


rota.listen(porta, () => {

    console.log('rodando');

});

