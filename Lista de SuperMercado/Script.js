var item = []

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var produto = document.querySelector('input[name=nome-produto]').value
    var valorProduto = document.querySelector('input[name=valor-produto]').value

    item.push({
        nome: produto,
        valor: valorProduto

    })
    
    


})