let btnEnviar = document.querySelector('.formcontato__botao');


btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let assunto = document.querySelector('#assunto').value;
    let mensagem = document.querySelector('#mensagem').value;

    let nomeErro = document.querySelector('#nome-erro');
    let emailErro = document.querySelector('#email-erro');
    let assuntoErro = document.querySelector('#assunto-erro');
    let mensagemErro = document.querySelector('#mensagem-erro');

    if (nome == "") {
        nomeErro.innerText = "*Preencha o nome";
    } else {
        nomeErro.innerText = "";
    }

    if (email == "") {
        emailErro.innerText = "*Preencha seu e-mail";        
    } else {
        emailErro.innerText = "";   
    }

    if (assunto == "") {
        assuntoErro.innerText = "*Preencha o campo assunto";   
    } else {
        assuntoErro.innerText = "";
    }

    if (mensagem == "") {
        mensagemErro.innerText = "*Preencha o campo de mensagem";
    } else {
        mensagemErro.innerText = "";
    }
})
