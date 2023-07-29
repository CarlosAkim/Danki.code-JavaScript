var item = []

document.querySelector('input[type=submit]').addEventListener('click',function(){
    var produto = document.querySelector("input[name=nome-produto]")
    var valorProduto = document.querySelector("input[name=valor-produto]")
    var lista = document.querySelector("#Lista-produtos")
    var res = document.querySelector("#Resultado")

    item.push({
        nome: produto.value,
        valor: valorProduto.value,
    });
    lista.innerHTML=''
    soma=0
    produto.focus()
    item.map(function(val){
        soma+=parseFloat(val.valor)
        produto.value=' '
        valorProduto.value=' '
        lista.innerHTML+=`
        <div id="Lista-produtos-single">
            <h3 id="produto">${val.nome}</h3>
            <h3 id="valor"><span>R$${val.valor}</span></h3>
        `
        res.innerHTML=`Total: R$${soma}`        
    })

    

})

function limpar(){
    item = []
    var lista = document.querySelector("#Lista-produtos").innerHTML=''
    var res = document.querySelector("#Resultado").innerHTML=`Total: R$0`

    
}
    