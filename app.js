const pokedex = document.getElementById("pokedex");

console.log(pokedex);

const fetchPokemon = () => {

    const promisses =[];
    for(let i = 1; i <= 150; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promisses.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promisses).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],            
            type: data.types .map((type) => type.type.name).join(', ')
        }));
        displayPokemon(pokemon)
    });
};

const displayPokemon = (pokemon) => {
        const pokemonHTMLString = pokemon.
        map (
            (pokeman) =>          
            `<div class="column">
                <div class="row">
                    <div class="card">                   
                        <img src="${pokeman.image}"/>
                        <div class="container">
                            <h2>${pokeman.id} - ${pokeman.name}</h2>
                            <p>Type: ${pokeman.type}</p>
                         </div>
                    </div>
                </div>
            </div>`
        ).join('');
    pokedex.innerHTML = pokemonHTMLString
        console.log(pokemon);
}
fetchPokemon();