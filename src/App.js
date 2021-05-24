import React from 'react';
import PokemonList from './components/pokemon-list/PokemonList';
import ApiProvider from './providers/api-context';

function App() {
  return (
    <ApiProvider>      
        <PokemonList />      
    </ApiProvider>
  );
}

export default App;
