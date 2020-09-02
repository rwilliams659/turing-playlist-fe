import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddSongForm from './AddSongForm'
import '@testing-library/jest-dom'

describe('AddSongForm component', () => {
  it('should display the add song form when rendered', () => {

    render(
      <AddSongForm 
        addNewSong={jest.fn()}
      />
    )

    const songInput = screen.getByPlaceholderText('Song name');
    const artistInput = screen.getByPlaceholderText('Artist');
    const linkInput = screen.getByPlaceholderText('Link');

    expect(songInput).toBeInTheDocument();
    expect(artistInput).toBeInTheDocument();
    expect(linkInput).toBeInTheDocument();
  });

  it('when a user types into the form, the value of the form inputs reflect what was typed', () => {
    render(
      <AddSongForm
        addNewSong={jest.fn()}
      />
    )

    const songInput = screen.getByPlaceholderText('Song name');
    const artistInput = screen.getByPlaceholderText('Artist');
    const linkInput = screen.getByPlaceholderText('Link');

    fireEvent.change(songInput, {target: {value: 'Break My Heart Again'}});
    fireEvent.change(artistInput, {target: {value: 'FINNEAS'}});
    fireEvent.change(linkInput, { target: { value: 'https://www.youtube.com/watch?v=iS7gY_vdAn8'}});

    //check that after the on change fires, those input values show up in the DOM
    expect(songInput.value).toBe('Break My Heart Again');
    expect(artistInput.value).toBe('FINNEAS');
    expect(linkInput.value).toBe('https://www.youtube.com/watch?v=iS7gY_vdAn8')
  }); 

})