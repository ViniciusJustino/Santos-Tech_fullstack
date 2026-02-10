const path = require('path')

module.exports.postUsuario = (req, res) => {
    const {username, password , info_extra} = req.body;
    console.log(username, password, info_extra);
};

module.exports.getLogin = (req, res) =>{
    res.sendFile(path.resolve(__dirname + '/../pages/login/login.html'));
}