const BASE_URL = 'http://localhost:8080/pokemon';

async function get(url) {
    const res = await fetch(url, {mode: 'cors'})
    return res.json();
}

async function getPokemonList(page = 0) {
    let url = `${BASE_URL}?page=${page}`
    const { pokemon } = await get(url)

    return {
        pokemon
    }
}

async function getPokemon(id) {
    const url = `${BASE_URL}/${id}`;
    const { pokemon } = await get(url);

    return {
        pokemon
    }
}

export default {
    getPokemon,
    getPokemonList
}