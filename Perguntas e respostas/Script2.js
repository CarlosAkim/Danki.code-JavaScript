//Aqui pegamos todos os elementos do 'tipo radio'
var elementos = document.querySelectorAll('[type=radio]')

//Usamos o for para começar a vaculhar as alternativas
for (var i in elementos){
    //atribuimos uma função para que diferencie as alternativas
    elementos[i].addEventListener('change',(e)=>{
        //usado como parametro 'e', para trazer o valor para dentro da variavel
        var op = e.target.value

        //começamos a diferenciar as alternativas
        if (op=='correta'){
            //alternativa correta
            //criamos uma variavel, que está pegando a div inteira
            let verde = e.target.parentNode;
            
            //coloquei cor de fundo para identificar a alternativa
            verde.style.backgroundColor = 'green'

            //criei um comando para desabilitar o restante das opções para depois que escolher
            let ele = verde.parentNode.querySelectorAll('[type=radio]')

            for(let n in ele){
                //comando 'disabled', desativou a opção de escolha das alternativas.
                ele[n].disabled = true;
            }
            
        }else if(op =='incorreta'){
            //alternativa incorreta

            let vermelho = e.target.parentNode

            vermelho.style.backgroundColor = 'red'

            let ele = vermelho.parentNode.querySelectorAll('input[type=radio]')

            for(var n=0; n < ele.length; n++){
                ele[n].disabled=true;
            }
            
            //usando o comando abaixo para identificar qual é alternativa correta.
            var tes = vermelho.parentNode.querySelector('[value=correta]')
            tes.parentNode.style.backgroundColor = 'green'
            
        }
    })
}