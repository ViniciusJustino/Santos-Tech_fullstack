class student{
    id; 
    name; 
    age;
    email;
    password;
    admin_id;

    constructor(_email, _password){
        this.email = _email;
        this.password = _password;
        this.id = 0; 
        this.name = '';
        this.age = 0;
        this.admin_id = 0;
    }

    setName(_name)
    {
        if(_name)
        {
            this.name = _name;
        }

        return this;
    }

    setAge(_age)
    {
        if(_age)
        {
            this.age = _age;
        }

        return this;
    }

    setId(_id)
    {
        if(_id)
        {
            this.id = _id;
        }

        return this;
    }

    setAdmin_id(_admin_id)
    {
        if(_admin_id)
        {
            this.admin_id = _admin_id;
        }

        return this;
    }
    
}

module.exports = student;