import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Fretboard from './components/Fretboard.jsx';
import Keyboard from './components/Keyboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chord: 'C',
      strings: [0, 0, 0, 3]
    }
    this.clickString = this.clickString.bind(this);
    this.pianofy = this.pianofy.bind(this);
  }

  clickString(string, fret) {
    let strings = this.state.strings
    if (fret === strings[string - 1]) {
      strings[string - 1] = 0;
    } else {
      strings[string - 1] = fret;
    }
    this.setState({ strings }, () => this.pianofy());

  }

  pianofy() {
    // standard tuning (i.e., gCEA)
    let standardTuning = [7, 0, 4, 9];
    let strings = this.state.strings;
    let currentKeys = standardTuning.map((x, i) => {
      return x + strings[i];
    })

    $('.key').removeClass('selectedKey');
    currentKeys.forEach((index) => {
      $(`#key${index}`).addClass('selectedKey');
    })
  }

  componentDidMount() {
    this.pianofy();
  }

  render() {
    return (
      <div id='app'>
        <h1>Ukunuhi</h1>
        <Fretboard strings={this.state.strings} click={this.clickString} />
        <Keyboard />
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));