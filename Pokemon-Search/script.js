function fetchPokemon(){
    const pokemonName= document.getElementById("pokemon-name").value.toLowerCase();
if(pokemonName===""){
    alert("ingrese el nombre de un pokemon por favor!");
    return;
}
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then((response)=>{
    if(!response.ok){
        throw new Error("pokemon no encontrado")
    }
    return response.json();
})
.then((date)=>displaypokemon(data))
.catch((error)=>{
    console.error("Error: ", error);
    document.getElementById('pokemon-info')
    .innerHTML= `<p>${error} pokemon no encontrado</p>`;
})
}
function displaypokemon(pokemon){
    const pokemonInfo=document.getElementById("pokemon-info")
    pokemonInfo.innerHTML=`
    <p> <h1>${ZZZZZ} </h1></p>
    
    `
}