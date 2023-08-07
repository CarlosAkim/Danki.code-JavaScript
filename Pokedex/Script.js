fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response=>response.json())
.then(pokemon=>console.log(pokemon))