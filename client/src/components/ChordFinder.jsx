import React from 'react';

const ChordFinder = (props) => {

  return (
    <div id='chordFinder'>
      <h2 id='chord'>{`${props.root}${props.tension}`}</h2>
      <div id='dropContent'>
        <select id='rootDropdown' className='dropContent' onChange={() => props.changeRoot()}>
          <option selected disabled value='' id='noChordRoot'>Root:</option>
          {['A#', 'A', 'Ab', 'B#', 'B', 'Bb', 'C#', 'C', 'D', 'Db', 'E#', 'E', 'Eb', 'F#', 'F', 'G', 'Gb'].map((root) => {
            return (<option id={root} key={root}>{root}</option>);
          })}
        </select>
        <select id='tenseDropdown' className='dropContent' onChange={() => props.changeTension()}>
        <option selected disabled value='' id='noChordType'>Type:</option>
          {['', 'm', '7', 'm7', 'maj7', '+'].map((tension) => {
            return (<option id={tension} key={tension}>{tension}</option>);
          })}
        </select>
      </div>
    </div>
  )
}

export default ChordFinder;


