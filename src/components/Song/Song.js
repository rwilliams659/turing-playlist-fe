import React from 'react';
import './Song.css'

const Song = ({ songName, artistName, link, id}) => {

  return (
    <article className='Song' id={id}>
      <h3>{songName}</h3>
      <h4>{artistName}</h4>
      <a href={link} target='_blank' rel='noopener noreferrer'>Listen now!</a>
    </article>
  )
}

export default Song 