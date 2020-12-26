import React, { useState } from 'react';

const UseStateBasics = () => {
  // const val = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(val, handler);
  const [text, setText] = useState("random title 2");
  const handleClick = () => {
    if (text === 'random title 2') {
      setText('hello world');
    } else {
      setText('random title 2');
    }
  }

  return (<React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      change title
    </button>
  </React.Fragment>);
};

export default UseStateBasics;
