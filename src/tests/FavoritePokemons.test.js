import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';
import { FavoritePokemons } from '../pages';

describe('Testa a rota /favorites ', () => {
  it('Teste se a pagina possui a mensagem esperada, caso não tenha nenhum favoritado',
    () => {
      renderWithRouter(<FavoritePokemons />);

      const favorite = screen.getByText(/No favorite pokemon found/i);

      expect(favorite).toBeInTheDocument();
    });

  it('Teste se a página contém as informações sobre a Pokédex', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/151');

    const label = screen.getByLabelText(/Pokémon favoritado/i);
    const favorite = screen.getByText(/favorite pokémons/i);
    userEvent.click(label);
    userEvent.click(favorite);
    const pokemon = screen.getByText(/mew/i);

    expect(pokemon).toBeInTheDocument();
  });
});
