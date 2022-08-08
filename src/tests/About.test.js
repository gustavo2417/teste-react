import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import { About } from '../pages';

describe('Testa a rota /about ', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const textAbout = screen.getByText(/About pokédex/i);

    expect(textAbout).toBeInTheDocument();

    const text1 = screen.getByText(/This Application/i);
    const text2 = screen.getByText(/One can filter/i);
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it('Testa se imagem da rota /about tem o atributo SRC esperado', () => {
    renderWithRouter(<About />);

    const imgPokedex = screen.getByAltText(/Pokédex/i);
    const URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(imgPokedex).toHaveProperty('src', `${URL}`);
  });
});
