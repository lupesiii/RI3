export class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    numeroCompleto() {
        return `(${this.ddd})${this.numero}`
    }
}

export class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    enderecoCompleto() {
        return `${this.rua} ${this.numero}, ${this.cidade}, ${this.estado}`
    }

    estadoCaixaAlta() {
        return this.estado.toUpperCase()
    }

    estadoCaixaBaixa() {
        return this.estado.toLowerCase()
    }

   cidadeCaixaAlta() {
        return this.cidade.toUpperCase()
    }

   cidadeCaixaBaixa() {
        return this.cidade.toLowerCase()
    }

    ruaCaixaAlta() {
        return this.rua.toUpperCase()
    }

    ruaCaixaBaixa() {
        return this.rua.toLowerCase()
    }
}

export class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }

    get getCpf() {
        return this.#cpf
    }

    set addTelefone(telefone) {
        this.telefones.add(telefone)
    }

    #easterEgg() {
        return "lupesi5566"
    }

    detalhes() {
        const listaTelefones = [...this.telefones].map(tel => tel.numeroCompleto())
        return( `Nome: ${this.nome}\nCPF: ${this.#cpf}\nEndereço: ${this.endereco.enderecoCompleto()}\nTelefones: ${listaTelefones}`)
    }

    nomeCaixaAlta() {
        return this.nome.toUpperCase()
    }

    nomeCaixaBaixa() {
        return this.nome.toLowerCase()
    }
}

export class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get showCnpj() {
        return this.#cnpj
    }

    set addCliente(cliente) {
        this.clientes.add(cliente)
    }

    set addTelefone(telefone) {
        this.telefones.add(telefone)
    }

    detalhes() {
        const detalhesClientes = [...this.clientes].map(cli => cli.detalhes()).join("\n\n")
        return "Razão Social: " + this.razaoSocial + '\n' +
        "Nome Fantasia: " + this.nomeFantasia + '\n' +
        "----------------------------------------------" + '\n' +
        detalhesClientes
    }

    razaoSocialCaixaAlta() {
        return this.razaoSocial.toUpperCase()
    }

    razaoSocialCaixaBaixa() {
        return this.razaoSocial.toLowerCase()
    }

    nomeFantasiaCaixaAlta() {
        return this.nomeFantasia.toUpperCase()
    }

    nomeFantasiaCaixaBaixa() {
        return this.nomeFantasia.toLowerCase()
    }
}