let usuarios = [
    {
        id: 1, 
        nome:'Joquim da silva', 
        idade: 45, 
        email: 'a', 
        senha:'123456', 
        admin_id: null
    },
    {
        id: 2, 
        nome:'Vinicius', 
        idade: 26, 
        email: 'vini.nicius@email.com', 
        senha:'', 
        admin_id: 1 
    }
];

class usuario{  
    static getUsuarios()
    {
        return usuarios;
    }

    static createUsuario(usuario)
    {
        if(!usuario)
            return null;

        if(usuarios.findIndex(usuariosExistentes => usuariosExistentes.id == usuario.id) === -1)
        {
            const novoUsuario = {
                id: usuarios.length() + 1,
                nome: usuario.nome,
                idade: usuario.idade,
                email: usuario.email,
                senha: usuario.senha,
                admin_id: usuario.admin_id
            }

            usuarios.push(novoUsuario);
            
            return usuarios;
        }
    }

    static deleteUsuario(id)
    {
        let index = parseInt(id);

        if(isNaN(index))
            return null;


        if(usuarios.findIndex(usuario => usuario.id == index) !== -1)
        {
            return usuarios.slice(index, 1);
        }
    }
}

module.exports = usuario;
