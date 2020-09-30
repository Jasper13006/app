import React from 'react';
import PokeCard from './PokeCard'
import pokeData from './pokeData'
import './Pokedex.css'
import { useState } from 'react';

const Pokedex = (props) => {
    const { history } = props
    const [count, setCount] = useState(0);
    // console.log(pokeData)
    return (
        <div >
            <h1>Esta app esta funcionando</h1>
            <div className='container'>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
            <div className='divDelPokedex'>
                {Object.keys(pokeData).map(pokemonId =>
                    <PokeCard pokeData={pokeData[pokemonId]} history={history} />
                )}
            </div>
        </div>
    )
}
export default Pokedex;