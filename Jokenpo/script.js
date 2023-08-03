var elemento = document.querySelectorAll("#jogo div > img")
var inimigo = document.querySelectorAll("#inimigo-jogo div > img")
var playerOPT = ''
var inimigoOPT = ''

function zerarPlayer(){
    for(var i=0;i<elemento.length;i++){
        elemento[i].style.opacity = 0.2;
    }
}
for (var i in elemento){
    elemento[i].addEventListener('click',function(t){
        zerarPlayer();
        t.target.style.opacity = 1
        playerOPT = t.target.getAttribute('opt')
        inimigoJoga();
        resultado();

    })
}

function zerarInimigo(){
    for(var i=0;i<inimigo.length;i++){
        inimigo[i].style.opacity = 0.2;
    }
}

function inimigoJoga(){
    // comando"math.floor" serve para transformar um numero em inteiro, e retorna o valor mais proximo.
    // comando "Math.random" serve para criar um valor aleatorio entre 0 e 1, ai colocamos o *3 para multiplicar esse aleatorio.
    const rand = Math.floor(Math.random()*3)

    for (var i=0; i<inimigo.length;i++){
        if(i==rand){
            zerarInimigo()
            inimigo[i].style.opacity = 1;
            inimigoOPT = inimigo[i].getAttribute('opt')
        }
    }
}

function resultado(){
    if (playerOPT == "papel" && inimigoOPT == "papel"){
        window.alert('empate')
    }else if (playerOPT == "papel" && inimigoOPT == "pedra"){
        window.alert('Vitoria do player 1, Papel ganha de Pedra')
    }else if (playerOPT == "papel" && inimigoOPT == "tesoura"){
        window.alert('Vitoria da player 2, Papel perde para tesoura ')
    }else if (playerOPT == "pedra" && inimigoOPT == "pedra"){
        window.alert('empate')
    }else if (playerOPT == "pedra" && inimigoOPT == "tesoura"){
        window.alert('Vitoria da player 1, Pedra ganha de Tesoura ')
    }else if (playerOPT == "pedra" && inimigoOPT == "papel"){
        window.alert('Vitoria da player 2, Pedra perde para papel ')
    }else if (playerOPT == "tesoura" && inimigoOPT == "tesoura"){
        window.alert('empate')
    }else if (playerOPT == "tesoura" && inimigoOPT == "papel"){
        window.alert('Vitoria da player 1, Tesoura ganha de Papel ')
    }else if (playerOPT == "tesoura" && inimigoOPT == "pedra"){
        window.alert('Vitoria da player 2, Tesoura perde para Pedra ')
    }

}

    



