let nome= window.document.getElementById("nome")
let email= document.querySelector("#email")
let assunto= document.querySelector("#comentario")
let nomeOk = false
let emailOk = false
let comentarioOk = false


nome.style.width='100%'
email.style.width='100%'
comentario.style.width = '100%'


function validaNome()
{
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3)
    {
        txtNome.innerHTML="Nome inválido!"
        txtNome.style.color="red"
    }
    else
    {
        txtNome.innerHTML="Nome válido"
        txtNome.style.color="green"
        nomeOk = true
    }
}

function validaEmail ()
{
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)
    {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color="red"
    }
    else
    {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color="green"
        emailOk = true
    }
}

function validaComentario()
{
    let txtComentario = document.querySelector("#txtComentario")

    if (assunto.value.length >= 200)
    {
        txtComentario.innerHTML="Digite no máximo 250 caracteres"
        txtComentario.style.color= "red"
        txtComentario.style.display = 'block'
    }
    else 
    {
        
        txtComentario.style.display = 'none'
        txtComentario = true
        comentarioOk = true
    }
}

function enviar ()
{
    if(nomeOk==true && emailOk==true && comentarioOk==true)
    {
        alert('Formulário enviado com sucesso!')
    }
    else
    {
        alert ('Preencha o formulário corretamente antes de envia-lo')
    }

}