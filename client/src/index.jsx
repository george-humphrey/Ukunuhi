import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chord: 'C',
      string1: 0,
      string2: 0,
      string3: 0,
      string4: 0
    }

  }

  componentDidMount() {
  }

  render() {
    return (
      <div id='app'>
        <h1>Ukunuhi</h1>
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));