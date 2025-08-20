function fetchPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/arcanine')
    .then(response=>response.json())
    .then(data=>displayPokemon(data))
    .catch(error=>console.error('el error es:', error))
}

function displayPokemon(pokemon){
    const pokemonInfo= document.getElementById('pokemon-info');
    pokemonInfo.innerHTML=`
    <p> <h1>${pokemon.name}</h1> </p>
    <p> <h2>Peso: ${pokemon.weight} Kg</h2> </p>
    <p> <h2>Altura: ${pokemon.height} M</h2> </p>
    <p> <img src="${pokemon.sprites.front_default}"> </p>
    `;
}