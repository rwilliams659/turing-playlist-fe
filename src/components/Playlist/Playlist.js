import React from 'react';
import './Playlist.css';
import Song from '../Song/Song'

const Playlist = ({songs}) => {
  const songList = songs.map(song => 
    <Song 
      songName={song.songName}
      artistName={song.artistName}
      link={song.link}
      id={song.id}
      key={song.id}
      /> )
  
    return (
    <>
      <h2>Time to Turn Up the Tunes!</h2>  
      <section className='Playlist'>
        {songList}
      </section>
    </>
  )
}

export default Playlist