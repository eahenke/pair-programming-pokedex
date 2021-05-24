import { arrayOf, number, string, shape } from 'prop-types';

export default shape({
    name: string,
    id: number,
    sprite: string,
    types: arrayOf(string),
    stats: shape({
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialDefense: number,
        speed: number,
    })
})