const pokemonContainer = document.querySelector('.pokemons-container');
const searchIpnut = document.getElementById('search-input');

function fetchPokemonImg(){
    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(res => res.json())
        .then(data =>{
            const pokemonImg = data.sprites.front_default;
            console.log(pokemonImg);
        })
}

fetchPokemonImg();

fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(res => res.json())
    .then(data => {
        let allPokemons = '';
        data.results.forEach(pokemon => {
            const pokemonImg = fetchPokemonImg();
            allPokemons += `<div class="pokemon" id="pokemon" >${pokemon.name}</div>`
        });

        pokemonContainer.innerHTML = allPokemons;

    })
    .catch(error => console.error(error))

searchIpnut.addEventListener('input', (e) => {
    const allPokemons = document.querySelectorAll('.pokemon');
    const value = e.target.value;
    allPokemons.forEach( (pokemon) => {
        const isvisible = pokemon.innerText.includes(value);
        pokemon.classList.toggle('hide', !isvisible);
    })
    })

