const path = require('path');
const models_usuarios = require('../models/usuario')


module.exports.postUsuario = (req, res) => {
    const {username, password } = req.body;
    console.log(username, password);

    if(models_usuarios.getUsuarios().findIndex( 
        usuario => usuario.email === username && usuario.senha === password  ) !== -1)
        {
            req.session.save(
                (erro) => {

                    if(erro)return res.statua(401);

                    req.session.logado = true;
                    res.redirect('/home');
                }
            );
   
        }
        else{
            res.send('Usuário ou senha incorretos');
            
            setTimeout(() => {
                res.redirect('/');
            }, 2000);
        }

};

module.exports.getLogin = (req, res) =>{
    res.sendFile(path.resolve(__dirname + '/../pages/login/login.html'));
}