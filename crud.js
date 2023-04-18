//DELETE - DELETA CADASTRO
function deletarDados(){
    const id = document.getElementById("id").value;

    fetch(`http://localhost:3000/policiais/${id}`, {
        method: 'DELETE',
    })

    .then(response => response.json)
}


//USANDO PARÂMETRO PARA FAZER O LOGIN 
function fazerLogin(){
    const emailPolicial = document.getElementById("emailPolicial").value;
    const senhaPolicial = document.getElementById("senhaPolicial").value;

    fetch('http://localhost:3000/policiais')
    .then(response => response.json())
    .then(data => {
        //busca cujo o nome e idade coicidem com os valores digitados 
        const pessoa = data.find(parametro => parametro.emailPolicial === emailPolicial && parametro.senhaPolicial === senhaPolicial)
console.log(emailPolicial)
console.log(senhaPolicial)
        if(pessoa){
            window.location.href = "bemVindo.html";
        }else{
            alert("Conta não encontrada")
        }
    })
}


//PUT - USANDO PARA ATUALIZAR DADOS JÁ EXISTENtE EM UM CADASTRO
function atualizaDados(){
    const nomePolicial = document.getElementById("nomePolicial").value;
    const id = document.getElementById("id").value;
    const senhaPolicial = document.getElementById("senhaPolicial").value;
    const sobrenomePolicial = document.getElementById("sobrenomePolicial").value;
    const emailPolicial = document.getElementById("emailPolicial").value;
    const cpfAtualizar = document.getElementById("cpfAtualizar").value;
    const distritoPolicial = document.getElementById("distritoPolicial").value;
    
    fetch(`http://localhost:3000/policiais/${id}`, {
        method: 'PUT', 
        
        headers:{
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            id:id,
            nomePolicial: nomePolicial, 
            sobrenomePolicial: sobrenomePolicial,
            emailPolicial: emailPolicial,
            distritoPolicial: distritoPolicial,
            cpfAtualizar:cpfAtualizar,
            senhaPolicial: senhaPolicial
        })

    })
    .then(response => response.json())
}


//GET - BUSCANDO CONTA PELO O CPF
function buscarDados(){
    const cpf = document.getElementById("cpfAtualizar").value;

    fetch('http://localhost:3000/policiais', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const cadastroPolicial = data.find(policial => policial.cpfAtualizar === cpf)
        if (cadastroPolicial) {
            document.getElementById("nomePolicial").value = cadastroPolicial.nomePolicial;
            document.getElementById("sobrenomePolicial").value = cadastroPolicial.sobrenomePolicial;
            document.getElementById("emailPolicial").value = cadastroPolicial.emailPolicial;
            document.getElementById("id").value = cadastroPolicial.id;
            document.getElementById("senhaPolicial").value = cadastroPolicial.senhaPolicial;
           
            document.getElementById("distritoPolicial").value = cadastroPolicial.distritoPolicial;
        }else{
            alert("Policial não encontrado no sistema")
        }
    })
}