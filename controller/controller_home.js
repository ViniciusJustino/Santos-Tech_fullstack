const diretorio = require('path');

module.exports.getHome = (req, res) => {
    res.sendFile(diretorio.resolve(__dirname + '/../pages/home.html'));
};
