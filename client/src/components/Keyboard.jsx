import React from 'react';

const Keyboard = (props) => {

  return (
    <div id='keyboard'>
      <div id='blackKeys'>
        {[1, 3, 6, 8, 10, 13, 15, 18].map((index) => {
          return (<div className='key blackKey' id={`key${index}`} key={`k${index}`}></div>)
        })}
      </div>
      <div id='whiteKeys'>
        {[0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19].map((index) => {
          return (<div className='key whiteKey' id={`key${index}`} key={`k${index}`}></div>)
        })}
      </div>
    </div>
  )
}

export default Keyboard;

