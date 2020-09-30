import React from 'react';
// import { AppBar, Toolbar, Grid, Card, CardContent, LinearProgress, CardMedia, Typography } from "@material-ui/core";
import './PokeCard.css'


const PokeCard = (props) => {
    // console.log(props.pokeData.types)
    const { history } = props
    // props.pokeData.types.map((e) => console.log(e.type.name))
    const types = props.pokeData.types.map((e) => e.type.name)
    const id = props.pokeData.id
    const name = props.pokeData.name
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className='card' onClick={() => history.push(`/${id}`)}>
            <img src={`${imagen}`} className='imagen' />
            <div className='container'>
                <h1>#{id}</h1>
                <h1>{name}</h1>
                {types.map(e => <h2>{e}</h2>)}
            </div>
        </div>
    )

}

export default PokeCard;