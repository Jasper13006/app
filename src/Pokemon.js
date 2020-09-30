import React from 'react';
import pokeData from './pokeData.js';
import './Pokemon.css'

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
        <div className='container'>
            <h1>Aca vienen los pokemons</h1>
            <h1>{name}</h1>
            <img src={imagen} className='imagen' />
            <h2>Type:</h2>
            <div className='divDeLosTipos'>
                {types.map((e) =>
                    <h2>{e.type.name}</h2>
                )}
            </div>
            {/* {types.map(e => console.log(e.type.name))} */}
        </div>
    )

}
export default Pokemon;