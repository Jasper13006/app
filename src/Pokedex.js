import React from 'react';
import PokeCard from './PokeCard'
import pokeData from './pokeData'
import './Pokedex.css'

const Pokedex = (props) => {
    const { history } = props
    // console.log(pokeData)
    return (
        <div >
            <h1>Esta fuck esta andando</h1>
            <div className='divDelPokedex'>
                {Object.keys(pokeData).map(pokemonId =>
                    <PokeCard pokeData={pokeData[pokemonId]} history={history} />
                )}
            </div>
        </div>
    )
}
export default Pokedex;