import React from 'react';
import { render, screen } from '@testing-library/react';
import Song from './Song'
import '@testing-library/jest-dom'

describe('Song component', () => {
  it('should display a song with title, artist, and link when rendered', () => {

    render(
      <Song
        songName='Break My Heart Again'
        artistName='FINNEAS'
        link='https://www.youtube.com/watch?v=iS7gY_vdAn8'
        id={1}
        key={1}
      />
    );

    const songName = screen.getByText('Break My Heart Again');
    const artist = screen.getByText('Artist: FINNEAS');
    const link = screen.getByText('Listen now!');

    expect(songName).toBeInTheDocument(); 
    expect(artist).toBeInTheDocument(); 
    expect(link).toBeInTheDocument(); 
  })
})