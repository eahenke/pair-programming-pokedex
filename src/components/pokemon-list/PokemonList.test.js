import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import PokemonList, { PokemonListPresentation } from './PokemonList';
import pokemonFixtures from '../../test-fixtures/pokemon-list';
import { ApiContext } from '../../providers/api-context';

const FIXTURES = {
    pokemon: pokemonFixtures,
    loading: false,
    error: null,
    onClickNext: jest.fn()
};

describe('container', () => {
    test('fetches data', async () => {
        const dataFixture = {
            ...pokemonFixtures[0],
            name: 'Fake name',
            id: 1
        };
        const api = {
            getPokemonList: async () => ({pokemon: [dataFixture]})
        }
        const { findByText } = render(<ApiContext.Provider value={api}><PokemonList /></ApiContext.Provider>)
        const text = await findByText('Fake name: #1');
        expect(text).toBeInTheDocument();
    })
});

describe('presentation', () => {
    test('renders the pokemon data', () => {
      const { getByText } = render(<PokemonListPresentation {...FIXTURES} />);
      expect(getByText('Charmander: #4')).toBeInTheDocument();
      expect(getByText('Charmeleon: #5')).toBeInTheDocument();
      expect(getByText('Charizard: #6')).toBeInTheDocument();
      
    });
    
    test('renders loading', () => {
        const { getByText } = render(<PokemonListPresentation {...FIXTURES} loading={true} />);
        expect(getByText('LOADING')).toBeInTheDocument();
        
      });
    
      test('renders error', () => {
        const { getByText } = render(<PokemonListPresentation {...FIXTURES} error="Failed" />);
        expect(getByText('Error: Failed')).toBeInTheDocument();
        
      });
    
      test('attaches click handler', () => {
        const { getByText } = render(<PokemonListPresentation {...FIXTURES} />);
        const button = getByText('Next');
        fireEvent.click(button);
        expect(FIXTURES.onClickNext).toHaveBeenCalled();    
      });
});