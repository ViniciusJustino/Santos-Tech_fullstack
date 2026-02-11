const diretorio = require('path');
const models_usuarios = require('../models/usuario');

module.exports.getHome = (req, res) => {
    res.sendFile(diretorio.resolve(__dirname + '/../pages/home.html'));
};

module.exports.getUsuariosCadastrados = (req, res) => {
    res.json(models_usuarios.getUsuarios());
};
