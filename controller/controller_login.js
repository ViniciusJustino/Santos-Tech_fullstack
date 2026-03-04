const path = require('path');



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
                    req.session.admin = usuario.admin_id != 0 ? true : false;
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