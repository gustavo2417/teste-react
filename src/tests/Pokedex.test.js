import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Testa o componente Pokédex', () => {
  it('Testa se pussui o texto Encountered pokémons',
    () => {
      renderWithRouter(<App />);

      const text = screen.getByRole('heading', { name: /Encountered pokémons/i });

      expect(text).toBeInTheDocument();
    });

  it('Testa se muda de pokémon quando clica no botão Proximo Pokémon', () => {
    renderWithRouter(<App />);

    const pikachu = screen.getByAltText(/Pikachu sprite/i);
    expect(pikachu).toBeInTheDocument();

    const nextButton = screen.getByTestId(/next-pokemon/i);
    userEvent.click(nextButton);
    const charmander = screen.getByAltText(/Charmander sprite/i);

    expect(charmander).toBeInTheDocument();
  });

  it('Testa se apenas um Pokémon aparece', () => {
    renderWithRouter(<App />);

    const pokemon = screen.getAllByTestId('pokemon-name');

    expect(pokemon).toHaveLength(1);
  });

  it('Testa se o botao all está na tela', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByTestId('');

    expect(buttonAll).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const nextButton = screen.getByTestId(/next-pokemon/i);
    const buttonAll = screen.getByTestId('');
    userEvent.click(buttonAll);
    const pikachu = screen.getByAltText(/Pikachu sprite/i);

    expect(pikachu).toBeInTheDocument();

    userEvent.click(nextButton);
    const charmander = screen.getByAltText(/Charmander sprite/i);

    expect(charmander).toBeInTheDocument();

    userEvent.click(nextButton);
    const caterpie = screen.getByAltText(/Caterpie sprite/i);

    expect(caterpie).toBeInTheDocument();
  });

  it('Testa se tem botões na tela que filtram por tipo', () => {
    renderWithRouter(<App />);

    const LenghtOfButtons = 7;
    const buttonsLenght = screen.getAllByTestId('pokemon-type-button');

    expect(buttonsLenght).toHaveLength(LenghtOfButtons);

    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    types.forEach((type) => {
      const buttons = screen.getByRole('button', { name: type });
      expect(buttons).toBeInTheDocument();
    });
  });
});
