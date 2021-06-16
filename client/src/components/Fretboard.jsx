import React from 'react';
import String from './String.jsx'

const Fretboard = (props) => {

  return (
    <div id='fretboard'>
      <String id='string1' number={1} fret={props.strings[0]} click={props.click} />
      <String id='string2' number={2} fret={props.strings[1]} click={props.click} />
      <String id='string3' number={3} fret={props.strings[2]} click={props.click} />
      <String id='string4' number={4} fret={props.strings[3]} click={props.click} />
    </div>
  )
}

export default Fretboard;