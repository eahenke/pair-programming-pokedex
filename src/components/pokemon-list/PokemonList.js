import React, { useEffect, useState } from 'react';
import { usePokemon } from '../../hooks';
import Pokemon from '../pokemon/Pokemon';
import './pokemon-list.css';

export default function PokemonList() {
    const [currentPage, setCurrentPage] = useState(0)
    const { data = [], error, loading } = usePokemon(currentPage);
    const [pokemon, setPokemon] = useState([...data]);

    useEffect(() => {
        setPokemon(curr => [...curr, ...data])
    }, [data])

    const onClickNext = () => setCurrentPage(curr => curr + 1);

    return (
        <PokemonListPresentation pokemon={pokemon} loading={loading} error={error} onClickNext={onClickNext} />
    );
}

export function PokemonListPresentation({ pokemon, loading, error, onClickNext }) {
    return (
        <>
            {error ? <p>Error: {error}</p> : null}
            {loading ? <p>LOADING</p> : null}
            { pokemon ? (
                <div className="poke-list">
                    {(pokemon.map(poke => 
                    <Pokemon key={poke.name} pokemon={poke} />
                    ))}
                </div>
            ) : null}
            <button onClick={onClickNext}>Next</button>
      </>
    );
}