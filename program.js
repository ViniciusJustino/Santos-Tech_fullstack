const rotas = require('express');
const session = require('express-session');
const rota = rotas();

rota.use(rotas.json());

rota.use(session({
    secret: 'santos-tech',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));

rota.use(rotas.urlencoded({extended: true}));
const diretorio = require('path');
const helmet = require('helmet');
const controller_home = require('./controller/controller_home');
const controller_login = require('./controller/controller_login');
const database = require('./db/database');
const auth = require('./middleware/auth');

const pool = database.conexao();

rota.use(helmet());

rota.use(rotas.static(diretorio.join(__dirname, '/pages')));

const porta = '8080';

rota.get('/'     , controller_login.getLogin);
rota.get('/login', controller_login.getLogin)

rota.post('/login', controller_login.postUsuario);

rota.get('/employee/home',controller_home.getHome);

rota.listen(porta, () => {

    console.log('rodando');

});

