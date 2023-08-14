//Começamos puxando todo o conteudo do tipo 'radio' e atribuimos a variavel 'elementos'
var elementos = document.querySelectorAll('input[type=radio]')

//agora vamos criar um evento para que seja notificado alguma mudança na escolha do usuario.
for( var i in elementos){
    //usamos o comando 'change' para que toca vez que tenha uma troca nas opções ele acione a função
    elementos[i].addEventListener('change',(e)=>{
        
        let marcado = e.target.value

        if(marcado == 'correta'){
            //comando 'previousElementSibling' pega o elemente anterios ao que foi mencionado.
            let el = e.target.previousElementSibling.style.backgroundColor = 'green'
        }else {
            let el = e.target.previousElementSibling.style.backgroundColor = 'red'
        }
    })
}
