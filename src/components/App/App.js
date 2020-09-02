import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist'
import AddSongForm from '../AddSongForm/AddSongForm'
import SongController from '../SongController/SongController';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/v1/playlist')
      .then(response => response.json())
      .then(playlist => this.setState({songQueue: playlist}))
      .catch(error => console.log(error))
  }

  addNewSong = (song) => {
    let newSongQueue = [...this.state.songQueue];
    newSongQueue.push(song)
    this.setState({ songQueue: newSongQueue})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <Playlist 
              songs={this.state.songQueue}
            />
            <AddSongForm
              addNewSong={this.addNewSong}
            />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
