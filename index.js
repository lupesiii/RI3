const {Telefone, Cliente, Endereco, Empresa} = require("./classes.js")


const endereco1 = new Endereco("SP", "São Paulo", "Rua A", 100)
const cliente1 = new Cliente("João Silva", "11111111111", endereco1)
cliente1.addTelefone = new Telefone("11", "999999999")
cliente1.addTelefone = new Telefone("11", "988888888")

const endereco2 = new Endereco("RJ", "Rio de Janeiro", "Rua B", 200)
const cliente2 = new Cliente("Maria Souza", "22222222222", endereco2)
cliente2.addTelefone = new Telefone("21", "977777777")
cliente2.addTelefone = new Telefone("21", "966666666")

const endereco3 = new Endereco("MG", "Belo Horizonte", "Rua C", 300)
const cliente3 = new Cliente("Carlos Pereira", "33333333333", endereco3)
cliente3.addTelefone = new Telefone("31", "955555555")
cliente3.addTelefone = new Telefone("31", "944444444")

const endereco4 = new Endereco("RS", "Porto Alegre", "Rua D", 400)
const cliente4 = new Cliente("Ana Costa", "44444444444", endereco4)
cliente4.addTelefone = new Telefone("51", "933333333")
cliente4.addTelefone = new Telefone("51", "922222222")

const endereco5 = new Endereco("BA", "Salvador", "Rua E", 500)
const cliente5 = new Cliente("Pedro Santos", "55555555555", endereco5)
cliente5.addTelefone = new Telefone("71", "911111111")
cliente5.addTelefone = new Telefone("71", "900000000")

listaClientes = [cliente1, cliente2, cliente3, cliente4, cliente5]

let embraer = new Empresa("Aeronaves", "Embraer", "121223233434", endereco1)
embraer.addTelefone = new Telefone("19", "900000000")
embraer.addTelefone = new Telefone("23", "222932772")
for (const cliente of listaClientes) {
    embraer.addCliente = cliente
}

console.log(embraer.detalhes())