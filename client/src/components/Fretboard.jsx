import React from 'react';
import String from './String.jsx'

const Fretboard = (props) => {

  return (
    <div id='fretboard'>
      {[0, 1, 2, 3].map((index) => {
        return (<String id={`string${index + 1}`} key={index} number={index + 1} fret={props.strings[index]} click={props.click} />)
      })}
    </div>
  )
}

export default Fretboard;


