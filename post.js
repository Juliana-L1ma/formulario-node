//ADICIONANDO PESSOAS NO BANCO DE DADOS
function enviarDados(){
    const nomePolicial = document.getElementById("nomePolicial").value;
    const sobrenomePolicial = document.getElementById("sobrenomePolicial").value;
    const emailPolicial = document.getElementById("emailPolicial").value;
    const senhaPolicial = document.getElementById("senhaPolicial").value;
    const cpfAtualizar = document.getElementById("cpfPolicial").value;
    const distritoPolicial = document.getElementById("distritoPolicial").value;
    
    fetch('http://localhost:3000/policiais', {
        method: 'POST', 
        
        headers:{
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            nomePolicial: nomePolicial, 
            sobrenomePolicial: sobrenomePolicial,
            emailPolicial: emailPolicial,
            senhaPolicial:senhaPolicial,
            distritoPolicial: distritoPolicial,
            cpfAtualizar:cpfAtualizar
        })

    })
    .then(response => response.json())
}


//ADICIONANDO OS DADOS DO REGISTRO NO BANCO DE DADOS
function enviarRegistro(){
    //pegando da parte sobre o registro
    const id = document.getElementById("id").value;
    const dataDoRegistro = document.getElementById("dataDoRegistro").value;
    const horaDoRegistro = document.getElementById("horaDoRegistro").value;
    const responsavelInvestigacao = document.getElementById("responsavelInvestigacao").value;
    const faixa = document.getElementById("faixa").value;
    //pegando sobre dados da ocorrencia
    const artigo = document.getElementById("artigo").value;
    const local = document.getElementById("localDaOcorrencia").value;
    const data = document.getElementById("dataDaOcorrencia").value;
    const hora = document.getElementById("horaDaOcorrencia").value;
    const flagrante = document.getElementById("flagrante").value;
    //pegando dados dos envolvidos
     const nomeVitima = document.getElementById("nomeVitima").value;
    const cpfrgVitima = document.getElementById("cpfrgVitima").value;

    const nomeTestemunha = document.getElementById("nomeTestemunha").value;
    const cpfrgTestemunha = document.getElementById("cpfrgTestemunha").value;

    const nomeAutor = document.getElementById("nomeTestemunha").value;
    const cpfrgAutor = document.getElementById("cpfrgAutor").value;

    
    fetch('http://localhost:3000/registros', {
        method: 'POST', 
        
        headers:{
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            dataDoRegistro: dataDoRegistro,
            horaDoRegistro :horaDoRegistro,
            responsavelInvestigacao:responsavelInvestigacao,
            faixa:faixa,

            artigo:artigo,
            local:local,
            data:data,
            hora:hora,
            flagrante:flagrante,

            nomeVitima:nomeVitima,
            cpfrgVitima: cpfrgVitima,
            nomeTestemunha:nomeTestemunha,
            cpfrgTestemunha:cpfrgTestemunha,
            nomeAutor:nomeAutor,
            cpfrgAutor:cpfrgAutor

        })

    })
    .then(response => response.json())
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
            nomePolicial: nomePolicial, 
            sobrenomePolicial: sobrenomePolicial,
            emailPolicial: emailPolicial,
            distritoPolicial: distritoPolicial,
            cpfAtualizar:cpfAtualizar,
            senhaPolicial: senhaPolicial
        })

    })
    .then(response => response.json());
    
}