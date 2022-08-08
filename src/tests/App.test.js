import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Testando a navegaçao no app', () => {
  it('testa se é redirecionado para "/" ao clicar em home', () => {
    renderWithRouter(<App />);
    const home = screen.getByText(/home/i);

    expect(home).toBeInTheDocument();

    userEvent.click(home);
    const text = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(text).toBeInTheDocument();
  });

  it('testa se é redirecionado para "/about" ao clicar em About', () => {
    renderWithRouter(<App />);
    const about = screen.getByText(/about/i);

    expect(about).toBeInTheDocument();

    userEvent.click(about);
    const aboutText = screen.getByRole('heading', { name: /about Pokédex/i });
    expect(aboutText).toBeInTheDocument();
  });

  it('testa se é redirecionado para "/favorites" ao clicar em Favorite', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByText(/favorite pokémons/i);

    expect(favorite).toBeInTheDocument();

    userEvent.click(favorite);
    const favoriteText = screen.getByRole('heading', { name: /Favorite pokémons/i });
    expect(favoriteText).toBeInTheDocument();
  });
});
