import React from 'react';
import { render } from '@testing-library/react';
import PokemonList from './PokemonList';
import pokemonFixtures from '../../test-fixtures/pokemon-list';

const FIXTURES = {
    pokemon: pokemonFixtures,
    loading: false,
    error: null,
    onClickNext: jest.fn()
};

describe('presentation', () => {
    test('renders the pokemon data', () => {
      const { getByText } = render(<PokemonList {...FIXTURES} />);
      expect(getByText('Charmander: #4')).toBeInTheDocument();
      expect(getByText('Charmeleon: #5')).toBeInTheDocument();
      expect(getByText('Charizard: #6')).toBeInTheDocument();
      
    });
    
    test('renders loading', () => {
        const { getByText } = render(<PokemonList {...FIXTURES} loading={true} />);
        expect(getByText('LOADING')).toBeInTheDocument();
        
      });
    
      test('renders error', () => {
        const { getByText } = render(<PokemonList {...FIXTURES} error="Failed" />);
        expect(getByText('Error: Failed')).toBeInTheDocument();
        
      });
});