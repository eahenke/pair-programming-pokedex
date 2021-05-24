import React, { useState } from 'react';
import { arrayOf, bool, func, string } from 'prop-types';
import { usePokemon } from '../../hooks';
import PokemonPropType from '../../prop-types/pokemon';
import Pokemon from '../pokemon/Pokemon';
import './pokemon-list.css';

export default function PokemonList() {
    const [currentPage] = useState(0)
    const { data, error, loading } = usePokemon(currentPage);

    return (
        <PokemonListPresentation pokemon={data} loading={loading} error={error} />
    );
}

export function PokemonListPresentation({ pokemon = [], loading, error, onClickNext = () => {} }) {
    return (
        <div className="poke-list-container">
            {error ? <p className="error">Error: {error}</p> : null}
            {loading ? <p>LOADING</p> : null}
            { pokemon && pokemon.length ? (
                <div className="poke-list">
                    {(pokemon.map(poke => 
                    <Pokemon key={poke.name} pokemon={poke} />
                    ))}
                </div>
            ) : null}
            {/* TODO: Hook up button */}
            <button onClick={onClickNext}>Next</button>
      </div>
    );
}

PokemonListPresentation.propTypes = {
    pokemon: arrayOf(PokemonPropType),
    loading: bool,
    error: string,
    onClickNext: func
}