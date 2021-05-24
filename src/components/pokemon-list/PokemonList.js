import React from 'react';
import { arrayOf, bool, string } from 'prop-types';
import DEFAULT_POKEMON from '../../test-fixtures/pokemon-list-20';
import PokemonPropType from '../../prop-types/pokemon';
import './pokemon-list.css';
export default function PokemonList({ pokemon = DEFAULT_POKEMON, loading, error }) {
    console.log('pokemon', pokemon);
    return (
        <div className="poke-list-container">
           {/* Add Pokemon display component(s) */}
           <p>TODO: Display my Pokemon</p>
      </div>
    );
}

PokemonList.propTypes = {
    pokemon: arrayOf(PokemonPropType),
    loading: bool,
    error: string
}