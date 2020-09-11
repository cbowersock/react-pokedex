import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import Pokemon from '../components/Pokemon';
import GET_POKEMONS from '../graphql/get-pokemons';

const PokemonContainer = () => {

    const [number, setNumber] = useState(null);
    const [currentPoke, setCurrentPoke] = useState([]);

    const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
        variables: {first: 150},
    });

    const handleClick = () => {
        const randomNum = Math.floor(Math.random() * Math.floor(150));
        setNumber(randomNum)
        pokemons.forEach(pokemon => {
            if (pokemon === pokemons[number]) {
                setCurrentPoke([pokemon])
            }
        })
    }

    useEffect(() => {
        handleClick();
      }, [])

    return (
        <>
        <button onClick={handleClick}>Get Random Pokemon</button>
        <div className="container">
            {currentPoke && currentPoke.map(pokemon => 
                <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
        </>
    )
}

export default PokemonContainer;