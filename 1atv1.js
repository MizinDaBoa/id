//principal
const prompt = require('prompt-sync')()

let contatos = require('./contatos')
const atualizar = require('./atualizar')
const adicionar = require('./adicionar')
const remover = require('./remover')
const listar = require('./listar')


function menu(){
    console.log('Menu \n1. adicionar \n2. listar \n3. atualizar \n4. remover \n 5. sair')

    let opcao = prompt('digite o numero da funcao requisitada: ')
    switch(opcao){
        case '1':
            let nome = prompt('nome: ')
            let  email = prompt('email: ')
            let telefone = prompt('numero: ')
            adicionar({nome: nome,email: email,telefone: telefone})
            console.log('contato adicionado com sucesso!!')
            console.log(contatos)
            menu()
            break
        case '2':
            if(contatos.length == 0){
                console.log('nao ha nenhum contato cadastrado ainda')
            }else{
                listar()
            }
            menu()
            break
        case '3':
            if(contatos.length == 0){
                console.log('nao ha nenhum contato cadastrado ate o momento')
            }else{
                listar()
                let opcao = prompt('digite o id: ')
                const id = contatos.findIndex(contato => contato.id == opcao)
                if(id == -1){
                    console.log('id nao encontrado')
                }else{
                    let novoNome = prompt('dgite o nome: ')
                    let novoEmail = prompt('digite o email: ')
                    let novoTelefone = prompt('digite o numero de telefone: ')
                    atualizar(id,{nome: novoNome,email:novoEmail,telefone: novoTelefone})
                    console.log('contato atualizado com sucesso!!')
                }
                
               
            }
            menu()
            break
        case '4':
            if(contatos.length == 0){
                console.log('nao ha nehum contato cadastrado ate o momento')
            }else{
                listar()
                let numero = prompt('digite o id do contato que voce quer excluir: ')
                const id = contatos.findIndex(contato => contato.id == numero)
                if(id == -1){
                    console.log('id nao encontrado')
                }else{
                    remover(id)
                    console.log('removido com sucesso')
                }
            }
            menu()
            break
    }
}
menu()