var item = []

document.querySelector('input[name=verificar').addEventListener('click',()=>{
    var produto = document.querySelector('input[name=nome-produto]')
    var valor = document.querySelector('input[name=valor-produto]')
    var lista = document.querySelector('#Lista-produtos')
    var resultado = document.querySelector('#Resultado h3')
    

    if (produto.value==""&& valor.value==""){
        alert('digite um produto e um valor para adiciionar a lista!')
    }else{
        item.push({
            nome:produto.value,
            preco:valor.value,
        })  
        lista.innerHTML=""
        resultado.innerHTML=`Total: R$0`
        soma=0
        produto.focus()
        item.map((val)=>{
            soma+=parseFloat(val.preco)
            resultado.innerHTML=`Total: R$${soma}`
            lista.innerHTML+=`<div id="Lista-produtos-single">
            <h3 id="produto">${val.nome}</h3>
            <h3 id="valor"><span>${val.preco}</span></h3>
        </div>`
        })
    }
    



})

function limpar(){
    var produto = document.querySelector('input[name=nome-produto]').value=""
    var valor = document.querySelector('input[name=valor-produto]').value=""
    var lista = document.querySelector('#Lista-produtos').innerHTML=""
    var resultado = document.querySelector('#Resultado h3').innerHTML=`Total: R$0`

    item=[]


}





