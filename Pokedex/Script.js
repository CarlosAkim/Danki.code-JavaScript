var box = document.querySelector("#Pokemon-box")
pokemon = []

function quantidades(){

    var qtd = document.querySelector("#selecao").value
    box.innerHTML=""

    qtdPokemon(qtd)
}

function qtdPokemon(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade).then(response=>response.json()).then(allpokemons => {
        // aqui começamos a mapear para puxar os nomes e imagems dentro do nossa biblioteca
       allpokemons.results.map((val)=>{
           
           fetch(val.url).then(response=>response.json()).then(imagem=> {            
               //acrescetamos o nome, image, e imagem shiny dentro da biblioteca.
               pokemon.push({nome:val.name,img:imagem.sprites.front_default,shiny:imagem.sprites.front_shiny})
               
               // acrescetamos o lent
               if(pokemon.length ==quantidade){
                   pokemon.map((val)=>{
                       box.innerHTML+=`
                       <div id="pokemon"><!--Pokemons img-->
                       <img src="${val.img}" alt="Imagem dos pokemons">
                       <p>${val.nome}</p>
                       </div>`
                 
                    })
                    
               }
             
                 
           })   
               
               
       })
   })
   
}

    
   
       

   



/*`<div id="pokemon"><!--Pokemons img-->
                    <img src="${val.imagem}" alt="Imagem dos pokemons">
                    <p>${val.nome}</p>
                </div>` */