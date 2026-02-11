const rotas = require('express');
const { usuario, admin} = require('./models/usuario');
const diretorio = require('path');
const helmet = require('helmet');
const controller_home = require('./controller/controller_home');
const controller_login = require('./controller/controller_login');

const rota = rotas();

rota.use(rotas.urlencoded({extended: true}));

rota.use(helmet());

rota.use(rotas.json());

rota.use(rotas.static(diretorio.join(__dirname, '/pages')));

const porta = '8080';

rota.get('/', controller_login.getLogin);

rota.post('/login', controller_login.postUsuario);
rota.get('/usuarios', controller_home.getUsuariosCadastrados);

rota.listen(porta, () => {

    console.log('rodando');

});

