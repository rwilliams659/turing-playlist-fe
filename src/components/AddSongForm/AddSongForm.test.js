import React from 'react';
import { render, screen } from '@testing-library/react';
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
})

})