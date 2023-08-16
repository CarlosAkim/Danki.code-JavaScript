var elementos = document.querySelectorAll('[type=radio]')

for (var i in elementos){
    elementos[i].addEventListener('change',(e)=>{
        let marcado = e.target.value

        if (marcado == 'correta'){
            // resposta correta
            let verde = e.target.parentNode
            verde.style.backgroundColor = 'green'

            let ele = verde.parentNode.querySelectorAll('[type=radio]')
            for(var n in ele){
                ele[n].disabled = true;
            }
        }else if(marcado=='incorreta'){
            //resposta incorreta
            let vermelho = e.target.parentNode
            vermelho.style.backgroundColor = 'red'

            let ele = vermelho.parentNode.querySelectorAll('[type=radio]')
            for(var n in ele){
                ele[n].disabled = true;
            }
            var correto = vermelho.parentNode.querySelector('[value=correta]')
            correto.parentNode.style.backgroundColor='green'
        }

    })
}