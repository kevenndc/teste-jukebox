export default class Entity {

    // #id;

    constructor(
        id = null,
        firstName, 
        lastName, 
        fullName, 
        email, 
        phone, 
        isLegalEntity, 
        cpf, 
        cnpj,
    ) {
        this._id = id,
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.isLegalEntity = isLegalEntity;
        this.cpf = cpf;
        this.cnpj = cnpj;
    }

    get id() {
        return this._id;
    }

    static emptyEntity() {
        return new Entity(null, '', '', '', '', '', false, '', '');
    }

    static fromResponse(data) {
        return new Entity(
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
            pessoa_juridica: this.isLegalEntity,
            cpf: this.cpf,
            cnpj: this.cnpj,
        });
    }
    
    toString() {
        return JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: this.fullName ,
            email: this.email,
            phone: this.phone,
            isLegalEntity: Boolean(this.isLegalEntity),
            cpf: this.cpf,
            cnpj: this.cnpj,
        });
    }
}
