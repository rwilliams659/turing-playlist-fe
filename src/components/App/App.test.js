import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should allow a user to add a new song', () => {

    render(
      <App /> 
    )

    const songInput = screen.getByPlaceholderText('Song name');
    const artistInput = screen.getByPlaceholderText('Artist');
    const linkInput = screen.getByPlaceholderText('Link');
    const AddBtn = screen.getByText('Add song');

    fireEvent.change(songInput, { target: { value: 'Break My Heart Again' } });
    fireEvent.change(artistInput, { target: { value: 'FINNEAS' } });
    fireEvent.change(linkInput, { target: { value: 'https://www.youtube.com/watch?v=iS7gY_vdAn8' } });

    fireEvent.click(AddBtn); 

    const songTitle = screen.getByText('Break My Heart Again');
    const artist = screen.getByText('Artist: FINNEAS');

    expect(songTitle).toBeInTheDocument(); 
    expect(artist).toBeInTheDocument(); 
  })
})
