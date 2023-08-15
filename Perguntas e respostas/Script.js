//Começamos puxando todo o conteudo do tipo 'radio' e atribuimos a variavel 'elementos'
var elementos = document.querySelectorAll('[type=radio]')

//agora vamos criar um evento para que seja notificado alguma mudança na escolha do usuario.
for( var i=0;i<elementos.length;i++){
    //usamos o comando 'change' para que toca vez que tenha uma troca nas opções ele acione a função
    elementos[i].addEventListener('change',(e)=>{
        
        let marcado = e.target.value

        if(marcado == 'correta'){
            // resposta correta
            let verde = e.target.parentNode;
            verde.style.background = 'green'

            let els = document.querySelectorAll('[type=radio]')
            for(let n = 0 ; n < els.length; n++){
                els[n].disabled = true;
            }
        }else if(marcado == 'incorreta') {
            //resposta incorreta
            let vermelho = e.target.parentNode
            vermelho.style.background = 'red'

            let els = document.querySelectorAll('[type=radio]')
            for(let n in els){
                els[n].disabled=true
            }


        }
    })
}
