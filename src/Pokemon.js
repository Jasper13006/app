import React from 'react';
import pokeData from './pokeData.js';


const Pokemon = (props) => {
    console.log("Estoy consologueando las props =========>", props);
    const { match, history } = props;
    const { params } = match;
    const { pokemonId } = params;
    const pokemon = pokeData[pokemonId]
    const { name, types, weight, height } = pokemon
    console.log(pokemon)
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

    return (
        <div>
            <h1>Aca vienen los pokemons</h1>
            <h1> </h1>
        </div>
    )

}
export default Pokemon;