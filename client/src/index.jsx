import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Fretboard from './components/Fretboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chord: 'C',
      strings: [0, 0, 0, 2]
    }
    this.clickString = this.clickString.bind(this)
  }

  clickString(string, fret) {
    let strings = this.state.strings
    if (fret === strings[string - 1]) {
      strings[string - 1] = 0;
    } else {
      strings[string - 1] = fret;
    }
    this.setState({ strings });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id='app'>
        <h1>Ukunuhi</h1>
        <Fretboard strings={this.state.strings} click={this.clickString} />
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));