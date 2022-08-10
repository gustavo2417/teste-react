import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Testando a pagina Not found', () => {
  it('testa se possui o nome do pokemon na tela', () => {
    renderWithRouter(<App />);

    const link = screen.getByText(/more details/i);
    userEvent.click(link);
    const details = screen.getByText(/pikachu details/i);

    expect(details).toBeInTheDocument();
  });

  it('testa se tem um h2 escrito summary na pagina na pagina', () => {
    renderWithRouter(<App />);

    const link = screen.getByText(/more details/i);
    userEvent.click(link);
    const summary = screen.getByText(/summary/i);

    expect(summary).toBeInTheDocument();
  });

  it('testa se tem um resumo sobre o pokemon no component', () => {
    renderWithRouter(<App />);

    const link = screen.getByText(/more details/i);
    userEvent.click(link);
    const resumo = screen.getByText(/This intelligent Pokémon roasts hard/i);

    expect(resumo).toBeInTheDocument();
  });

  it('testa se possui a localizaçao do pokemon na tela', () => {
    renderWithRouter(<App />);

    const link = screen.getByText(/more details/i);
    userEvent.click(link);
    const screenLocation = screen.getByText(/Game Locations of pikachu/i);
    const location1 = screen.getByText(/kanto viridian forest/i);
    const location2 = screen.getByText(/kanto power plant/i);
    const imgLocation = screen.getAllByAltText(/pikachu location/i);

    expect(screenLocation).toBeInTheDocument();
    expect(location1).toBeInTheDocument();
    expect(location2).toBeInTheDocument();
    expect(imgLocation).toHaveLength(2);
  });

  it('testa se as imagems possuem o atributo src esperado', () => {
    renderWithRouter(<App />);

    const link = screen.getByText(/more details/i);
    userEvent.click(link);
    const imgLocation = screen.getAllByAltText(/pikachu location/i);
    const srcImage1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const srcImage2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

    expect(imgLocation[0]).toHaveProperty('src', srcImage1);
    expect(imgLocation[1]).toHaveProperty('src', srcImage2);
  });

  it('testa o botao de favoritar pokemon', () => {
    renderWithRouter(<App />);

    const link = screen.getByText(/more details/i);
    userEvent.click(link);
    const labelFavorite = screen.getByLabelText(/Pokémon favoritado/i);

    expect(labelFavorite).toBeInTheDocument();

    userEvent.click(labelFavorite);
    const favoriteIcon = screen.getByAltText(/pikachu is marked as favorite/i);

    expect(favoriteIcon).toBeInTheDocument();

    userEvent.click(labelFavorite);

    expect(favoriteIcon).not.toBeInTheDocument();
  });
});
