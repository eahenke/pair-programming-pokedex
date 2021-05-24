import React from 'react';
import { render } from '@testing-library/react';
import Pokemon from './Pokemon';
import pokemonFixtures from '../../test-fixtures/pokemon-list';

const FIXTURES = {
  pokemon: pokemonFixtures[0]
};

function expectSiblingValue(el, value) {
    expect(el.nextElementSibling.textContent).toEqual(value);
}

test('renders the pokemon data', () => {
  const { getByText } = render(<Pokemon {...FIXTURES} />);
  expect(getByText('Charmander: #4')).toBeInTheDocument();
  expect(getByText('Fire')).toBeInTheDocument();

  expectSiblingValue(getByText('Hp'), '39');
  expectSiblingValue(getByText('Attack'), '52');
  expectSiblingValue(getByText('Defense'), '43');
  expectSiblingValue(getByText('Special Attack'), '60');
  expectSiblingValue(getByText('Special Defense'), '50');
  expectSiblingValue(getByText('Speed'), '65');
});