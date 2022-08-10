import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon', () => {
  it('Testa se aparece as informacões corretas sobre o pokemon', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent('Pikachu');
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');
    const pokemonIMG = screen.getByAltText(/Pikachu sprite/i);
    const URL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(pokemonIMG).toHaveProperty('src', URL);
    expect(pokemonIMG).toHaveProperty('alt', 'Pikachu sprite');
  });

  it('Testa se o link tem a rota esperada', () => {
    renderWithRouter(<App />);

    const link = screen.getByText(/more details/i);
    const route = 'http://localhost/pokemons/25';
    expect(link).toHaveProperty('href', route);
  });

  it('Testa se ao clicar no link direciona para a rota certa', () => {
    renderWithRouter(<App />);

    const link = screen.getByText(/more details/i);
    userEvent.click(link);
    const details = screen.getByText(/Pikachu Details/i);

    expect(details).toBeInTheDocument();
  });

  it('testa se tem o icone de pokemon favorito com o src esperado', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');

    const labelFavorite = screen.getByLabelText(/Pokémon favoritado/i);
    userEvent.click(labelFavorite);
    const favoriteIcon = screen.getByAltText(/pikachu is marked as favorite/i);
    const SRC = 'http://localhost/star-icon.svg';

    expect(favoriteIcon).toBeInTheDocument();
    expect(favoriteIcon).toHaveProperty('src', SRC);
  });
});
