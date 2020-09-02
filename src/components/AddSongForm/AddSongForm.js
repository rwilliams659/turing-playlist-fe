import React, {Component} from 'react';
import './AddSongForm.css'

class AddSongForm extends Component {
  constructor(props) {
    super(props);
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
        <form className='AddSongForm'>
          <label htmlFor='songName'>Song Name:</label>
          <input type='text' name='songName' id='songName' value={this.state.songName} onChange={(event) => this.handleChange(event)}/>
          <label htmlFor='artistName'>Artist:</label>
          <input type='text' name='artistName' id='artistName' value={this.state.artistName} onChange={(event) => this.handleChange(event)}/>
          <label htmlFor='link'>YouTube link:</label>
          <input type='text' name='link' id='link' value={this.state.link} onChange={(event) => this.handleChange(event)}/>
          <input type='submit' value='Add song' id='add-song-btn' onClick={(event) => this.createNewSong(event)}/>
        </form>
      </section>
    )
  }

  handleChange = event => {
    const input = event.target.name; 
    const value = event.target.value; 
    this.setState({[input]: value}); 
  }

  createNewSong = event => {
    event.preventDefault();
    if (this.state.songName && this.state.artistName && this.state.link) {
      const song = {
        songName: this.state.songName,
        artistName: this.state.artistName,
        link: this.state.link
      }
      this.props.addNewSong(song); 
      this.clearInputs(event); 
    }
  }

  clearInputs() {
    this.setState({ songName: '', artistName: '', link: ''});
  }

}

export default AddSongForm; 