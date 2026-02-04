class usuario{
    id;
    nome;
    email;
    senha;
    ativo
    admin_id;

    constructor(_id){ this.id = _id}
}

class admin{
    id;
    permissoes = {
        criar_usuarios: false,
        criar_exercicios: false,
        criar_turma: false
    };

    constructor(){}
}

module.exports = { usuario: usuario, admin: admin };
