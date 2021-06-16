import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Fretboard from './components/Fretboard.jsx';
import Keyboard from './components/Keyboard.jsx';
import ChordFinder from './components/ChordFinder.jsx';
import helpers from './helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      root: 'Am7',
      tension: '',
      strings: [0, 0, 0, 0]
    }

    this.clickString = helpers.clickString.bind(this);
    this.pianofy = helpers.pianofy.bind(this);
    this.notify = helpers.notify.bind(this);
    this.chordNotFound = helpers.chordNotFound.bind(this);
    this.findChordFromNotes = helpers.findChordFromNotes.bind(this);
    this.findStringsFromChord = helpers.findStringsFromChord.bind(this);
    this.changeRoot = helpers.changeRoot.bind(this);
    this.changeTension = helpers.changeTension.bind(this);
  }

  componentDidMount() {
    this.pianofy();
    this.findChordFromNotes();
  }

  render() {
    return (
      <div id='app'>
        <h1>UKUNUHI</h1>
        <h3>The Ukulele/Piano Translator</h3>
        <Fretboard
          strings={this.state.strings}
          click={this.clickString} />
        <Keyboard />
        <ChordFinder
          root={this.state.root}
          tension={this.state.tension}
          findChord={this.findChord}
          changeRoot={this.changeRoot}
          changeTension={this.changeTension} />
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));