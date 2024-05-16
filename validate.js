// const formulario = document.querySelector("[data-formulario]");

// formulario.addEventListener("submit", function() {
//     var formulario = document.getElementById("formulario");
//     formulario.addEventListener("submit", function(event) {
//       event.preventDefault(); // Impede o envio padrão do formulário
  
//       var nome = document.getElementById("nome").value;
//       var email = document.getElementById("email").value;
//       var assunto = document.getElementById("assunto").value;
//       var mensagem = document.getElementById("mensagem").value;
  
//       var nomeErro = document.getElementById("nome-erro");
//       var emailErro = document.getElementById("email-erro");
//       var assuntoErro = document.getElementById("assunto-erro");
//       var mensagemErro = document.getElementById("mensagem-erro");
  
//       nomeErro.innerHTML = "";
//       emailErro.innerHTML = "";
//       assuntoErro.innerHTML = "";
//       mensagemErro.innerHTML = "";
  
//       var isValid = true;
  
//       if (nome === "") {
//         nomeErro.innerHTML = "Por favor, preencha o campo Nome.";
//         isValid = false;
//       }
      
//       if (email === "") {
//         telefoneErro.innerHTML = "Por favor, preencha o campo E-mail.";
//         isValid = false;
//       }
      
//       if (assunto === "") {
//         assuntoErro.innerHTML = "Por favor, preencha o campo Assunto.";
//         isValid = false;
//       }
      
//       if (mensagem === "") {
//         mensagemErro.innerHTML = "Por favor, preencha o campo Mensagem.";
//         isValid = false;
//       }
  
//       if (isValid) {
//         formulario.submit(); // Se o formulário for válido, envie-o
//       }
//     });
//   });


//SEGUIMENTO DE AULA
// const camposDoFormulario = document.querySelectorAll("[required]");
// const formulario = document.querySelector("[data-formulario]");

// camposDoFormulario.forEach((campo) => {

//     campo.addEventListener("blur", () => verificaCampo(campo))

// })

// function verificaCampo(campo) {

//     if (campo.name == 'nome' && campo.value == "") {
//         console.log("nome")
//     }
    
// }

//FIM SEGUIMENTO


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
        // let nomeErro = document.querySelector('#nome-erro');
        nomeErro.innerText = "*Preencha o nome";
    } else {
        // let nomeErro = document.querySelector('#nome-erro');
        nomeErro.innerText = "";
    }

    if (email == "") {
        // let emailErro = document.querySelector('#email-erro');
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







    // let nome = document.querySelector('#nome');
    // if(nome == ""){
    //     alert("campo vazio");
    // } else {
    //     alert("ok");
    // }
})





// const camposDoFormulario = document.querySelectorAll("[required]");
// const formulario = document.querySelector("[data-formulario]");

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const listaRespostas = {
//         "nome": e.target.elements["nome"].value,
//         "email": e.target.elements["email"].value,
//         "assunto": e.target.elements["assunto"].value,
//         "mensagem": e.target.elements["mensagem"].value,
//     }

//     localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

//     window.location.href = 'index.html';
// })

// camposDoFormulario.forEach((campo) => {
//     campo.addEventListener("blur", () => verificaCampo(campo));
//     campo.addEventListener("invalid", evento => evento.preventDefault());
// })

// const tiposDeErros = [
//     'valueMissing',
//     'typeMismatch',
//     'patternMismatch',
//     'tooShort',
//     'customError'
// ]

// const mensagens = {
//     nome: {
//         valueMissing: "O campo de nome não pode estar vazio.",
//         patternMismatch: "Por favor, preencha um nome válido.",
//         tooShort: "Por favor, preencha um nome válido."
//     },
//     email: {
//         valueMissing: "O campo de e-mail não pode estar vazio.",
//         typeMismatch: "Por favor, preencha um email válido.",
//         tooShort: "Por favor, preencha um e-mail válido."
//     },
//     asunto: {
//         valueMissing: "O campo de assunto não pode estar vazio.",
//         patternMismatch: "Por favor, preencha um assunto válido.",
//         tooShort: "O campo de assunto não tem caractéres suficientes."
//     },
//     mensagem: {
//         valueMissing: 'O campo de mensagem não pode estar vazio.',
//         patternMismatch: "Por favor, preencha uma mensagem válida.",
//         customError: "O CPF digitado não existe.",
//         tooShort: "O campo de mensagem não tem caractéres suficientes."
//     }
// }

// function verificaCampo(campo) {
//     let mensagem = "";
//     campo.setCustmoValidity('');
    
//     tiposDeErros.forEach(erro => {
//         if (campo.validity[erro]) {
//             mensagem = mensagens[campo.name][erro];
//             console.log(mensagem);
//         }
//     })
//     const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
//     const validadorDeInput = campo.checkValidity();

//     if (!validadorDeInput) {
//         mensagemErro.texContent = mensagem;
//     } else {
//         mensagemErro.texContent = "";
//     }
// }