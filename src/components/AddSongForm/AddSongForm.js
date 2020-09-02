import React, {Component} from 'react';
import './AddSongForm.css'

class AddSongForm extends Component {
  constructor() {
    super();
    this.state = {
      songName: '',
      artistName: '',
      link: ''
    }
  }

  render() {
    return (
      <form className='AddSongForm'>
        <label for='songName'>Song Name:</label>
        <input type='text' name='songName' id='songName' value={this.state.songName}/>
        <label for='artistName'>Artist:</label>
        <input type='text' name='artistName' id='artistName' value={this.state.artistName}/>
        <label for='link'>YouTube link:</label>
        <input type='text' name='link' id='link' value={this.state.link}/>
        <input type='submit' value='Add song'/>
      </form>
    )
  }
}

export default AddSongForm; 