import React from 'react';
import { string, number, shape } from 'prop-types';
import './pokemon.css';

const capitalize = (str = '') => {
    if (!str) return str;
    return str[0].toUpperCase() + str.substr(1)
}

const camelToSpace = (str = '') => {
    return str.replace(/([A-Z])/g, ' $1')
}

export default function Pokemon({pokemon}) {
    const { name, id, sprite, types = [], stats } = pokemon;
    return (
        <div className="pokemon">
            <img className="pokemon-sprite" alt="name" src={sprite}/>
            <p className="pokemon-name">{capitalize(name)}: #{id}</p>
            <dl className="pokemon-info">
                <dt>Types</dt>
                <dd>
                    {types.map(type => capitalize(type)).join(', ')}
                </dd>
                {Object.entries(stats).map(([key, value]) => {
                    return (
                        <React.Fragment key={key}>
                            <dt>{capitalize(camelToSpace(key))}</dt>
                            <dd>{value}</dd>
                        </React.Fragment>
                    )
                })}
            </dl>
        </div>
    )
}

Pokemon.propTypes = {
    pokemon: shape({
        name: string,
        id: number,
        sprite: string,
        stats: shape({
            hp: number,
            attack: number,
            defense: number,
            specialAttack: number,
            specialDefense: number,
            speed: number,
        })
    })
}