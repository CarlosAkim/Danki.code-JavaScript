var item = []


document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var produto = document.querySelector('input[name=nome-produto]')
    var valorProduto = document.querySelector('input[name=valor-produto]')
    var resultado = document.querySelector("#Resultado")
    item.push({
        nome: produto.value,
        valor: valorProduto.value

    })

    var tab = document.querySelector("#Lista-produtos")
    
    //comando .map funcionou como um loop.
    tab.innerHTML = ""
    soma = 0
    item.map(function(val){
        
        soma+=parseFloat(val.valor)
        tab.innerHTML+=`
        
        <div id="Lista-produtos-single">
            <h3 id="produto">${val.nome}</h3>
            <h3 id="valor"><span>${val.valor}</span></h3>
        </div>
        `
        resultado.innerHTML = `R$${soma}`
        
    })

    produto.value = ""
    valorProduto.value = ""
        
    
    

})

