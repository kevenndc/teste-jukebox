export default class Person {

    static counter = 0;

    constructor(
        id = null,
        firstName = '', 
        lastName = '', 
        fullName = '', 
        email = '', 
        phone = '', 
        isLegalPerson = false, 
        cpf = '', 
        cnpj = '',
    ) {
        this._id = id ? id : ++Person.counter;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.isLegalPerson = isLegalPerson;
        this.cpf = cpf;
        this.cnpj = cnpj;
    }

    get id() {
        return this._id;
    }

    static fromResponse(data) {
        return new Person(
            data.id,
            data.nome,
            data.sobrenome,
            data.nome_completo,
            data.email,
            data.telefone,
            Boolean(data.pessoa_juridica),
            data.cpf,
            data.cnpj,
        );
    }

    toJSON() {
        return JSON.stringify({
            id: this._id,
            nome: this.firstName,
            sobrenome: this.lastName,
            nome_completo: this.fullName,
            email: this.email,
            telefone: this.phone,
            pessoa_juridica: this.isLegalPerson,
            cpf: this.cpf,
            cnpj: this.cnpj,
        });
    }
}
