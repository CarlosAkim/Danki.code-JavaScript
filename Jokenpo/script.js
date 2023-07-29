var elemento = document.querySelectorAll("#jogo div > img")

function zerar(){
    for(var i=0;i<elemento.length;i++){
        elemento[i].style.opacity = 0.2;
    }
}

for (var i in elemento){
    elemento[i].addEventListener('click',function(t){
        zerar();
        t.target.style.opacity = 1
    })
}