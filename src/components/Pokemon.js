import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokedex] = useState([])
    
    const fetchPoke = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {
                setPokedex(response.data.results)})

            .catch(err => {console.log(err)})
    };

    return (
        <div>
            <button onClick={fetchPoke}>Fetch Pokemon</button>
                {pokemon.map((monsters, idx) => {
                    return (<div key = {idx}>{monsters.name}</div>)})
                } 
        </div>
    )
}

export default Pokemon