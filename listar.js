let contatos = require('./contatos')
function listar(){
        contatos.forEach((contato) =>{
            console.log(`id: ${contato.id}, nome: ${contato.nome}, email: ${contato.email}, numero: ${contato.telefone}`)
        })
    }

module.exports = listar