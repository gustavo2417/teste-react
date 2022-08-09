import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import { NotFound } from '../pages';

describe('Testando a pagina Not found', () => {
  it('testa se é redirecionado para "/" ao clicar em home', () => {
    renderWithRouter(<NotFound />);
    const notFound = screen.getByText(/Page requested not found/i);

    expect(notFound).toBeInTheDocument();
  });

  it('Testa se aparece a imaem esperada na  pagina Not Found', () => {
    renderWithRouter(<NotFound />);

    const
      imgPikachu = screen
        .getByAltText(/Pikachu crying because the page requested was not found/i);
    const URL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(imgPikachu).toHaveProperty('src', `${URL}`);
  });
});
