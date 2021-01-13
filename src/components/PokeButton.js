import React, { useState, useEffect } from 'react';

const PokeButton = (props) => {
    const [state, setState] = useState(0);
    
    
    
    const onSubmitHandler = event => {
        event.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response =>{
            return response.json()
        })
        .then(response => {
            setState({
                pokemon: response.results
            })
        })
}
        return(
            <div>
            <form onSubmit={ onSubmitHandler }>
                <input type="submit"></input>
            </form>
                {state.pokemon ? state.pokemon.map((item, i)=>{
                    return(<div key={i}>{item.name}</div>)
                }):null}
            </div>
        );
    }
export default PokeButton;