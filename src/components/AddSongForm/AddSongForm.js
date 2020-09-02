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
      <section className='add-song-right'>
        <h2>Add Song to Playlist</h2>
        <form className='AddSongForm' onChange={(event) => this.handleChange(event)}>
          <label for='songName'>Song Name:</label>
          <input type='text' name='songName' id='songName' value={this.state.songName}/>
          <label for='artistName'>Artist:</label>
          <input type='text' name='artistName' id='artistName' value={this.state.artistName}/>
          <label for='link'>YouTube link:</label>
          <input type='text' name='link' id='link' value={this.state.link}/>
          <input type='submit' value='Add song' id='add-song-btn' onChange={this.addNewSong}/>
        </form>
      </section>
    )
  }

  handleChange = (event) => {
    const input = event.target.name; 
    const value = event.target.value; 
    this.setState({[input]: value}); 
  }

  //MOVE TO APP 
  addNewSong = () => {

  }
}

export default AddSongForm; 