//Começamos puxando todo o conteudo do tipo 'radio' e atribuimos a variavel 'elementos'
var elementos = document.querySelectorAll('input[type=radio]')

//agora vamos criar um evento para que seja notificado alguma mudança na escolha do usuario.
for( var i=0;i<elementos.length;i++){
    //usamos o comando 'change' para que toca vez que tenha uma troca nas opções ele acione a função
    elementos[i].addEventListener('change',(e)=>{
        
        let marcado = e.target.value

        if(marcado == 'correta'){
            let verde = e.target.parentNode;

            verde.style.backgroundColor = 'Green'

            let test = parentNode.parentNode.querySelectorAll('[type=radio]')

            for(var n=0;n< test.length;n++){
                test[n].disabled = true;
            }
        }else {
            let vermelho = e.target.parentNode;
            vermelho.style.backgroundColor = 'red'
            let test = vermelho.parentNode.querySelector('[type=radio]')
            
            for(var n=0;n< test.length;n++){
                test[n].disabled = true;
            }
            let correta = vermelho.parentNode.querySelectorAll('[value=correta]')
            correta.style.backgroundColor='green'

        }
    })
}
