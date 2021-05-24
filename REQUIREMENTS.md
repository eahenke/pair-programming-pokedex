# Pair Programming Exercise: Pokedex

Create a page that displays information about Pokemon using the public PokeApi.

## Basic Requirements
Network requests and layout are already handled. You should implement the following:

* Create a React Hook that uses the API helper to fetch Pokemon information
* Hook should return an object with the following fields:
    * `data`, the `pokemon` field returned from `api.getPokemonList()`.
    * `loading`, a boolean.
    * `error`, a string with the error message, if any.

## Additional Features
* Pagination: The page should have a button that loads the next set Pokemon when clicked


## Resources
* Public API: [https://pokeapi.co/api/v2](https://pokeapi.co/api/v2)
* Documentation: [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)
