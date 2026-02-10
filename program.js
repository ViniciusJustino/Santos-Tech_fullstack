const rotas = require('express');
const { usuario, admin} = require('./models/usuario');
const diretorio = require('path');
const controller_home = require('./controller/controller_home');
const controller_login = require('./controller/controller_login');


const rota = rotas();

rota.use(rotas.urlencoded({extended: true}));
rota.use(rotas.static(diretorio.join(__dirname + '/pages')));
//rota.use(rotas.static(diretorio.join(__dirname + '/models')));

const porta = '8080';

const usuarios = [new usuario(1), new usuario(2), new usuario(3), new admin()];

rota.get('/', controller_login.getLogin);

rota.post('/login', controller_login.postUsuario);

rota.listen(porta, () => {

    console.log('rodando');

});

