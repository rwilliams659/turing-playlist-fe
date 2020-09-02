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
    <section className='playlist-left'>
      <h2>Current Playlist</h2>  
      <section className='Playlist'>
        {songList}
      </section>
    </section>
  )
}

export default Playlist