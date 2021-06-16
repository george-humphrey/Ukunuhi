import React from 'react';

const String = (props) => {

  return (
    <div id={props.id} className='string' >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
        let interior = index === props.fret ? 'n' : ''
        return (<div className='stringposition' id={`${props.id}position${index}`} key={`${props.number}${index}`} onClick={() => props.click(props.number, index)}>{interior}</div>)
      })}
    </div>
  )
}

export default String;