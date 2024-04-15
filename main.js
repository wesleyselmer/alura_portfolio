document.querySelector('.contato__formulario__botao').onclick = function(){ validaForm()}

function validaForm () {
    let nome = document.querySelector('#nome');
    let email = document.querySelector('#email');
    let assunto = document.querySelector('#assunto');
    let mensagem = document.querySelector('#mensagem');
 
    if ((validaVazio(nome)) &&
        (validaTamanho(nome, 50)) &&    
        (validaVazio(email)) &&
        (validaEmail(email)) &&
        (validaVazio(assunto)) &&
        (validaTamanho(assunto, 50)) &&
        (validaVazio(mensagem)) &&
        (validaTamanho(mensagem, 300))
    ){
       alert("Contato enviado.") ;
    }
}

function validaVazio (elemento) {
    if (elemento.value == "") {
        alert(`Informe o ${elemento.id}`);
        elemento.focus();
        return false;
    } else {
        return true;
    }
}

function validaTamanho(elemento, tamanho) {
    if (elemento.value.length > tamanho) {
        alert(`O ${elemento.id} tem muitos caracteres.`);
        elemento.focus();
        return false;
    } else {
        return true;
    }
}

function validaEmail (elemento) {
    usuario = elemento.value.substring(0, elemento.value.indexOf("@"));
    dominio = elemento.value.substring(elemento.value.indexOf("@")+ 1, elemento.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true;
    } else{
        alert("E-mail invalido");
        elemento.focus();
        return false;
    }
}