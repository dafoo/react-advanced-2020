import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect');  // called once
    window.addEventListener('resize', checkSize);
    return () => {  // cleanup callback
      console.log('cleanup');  // cleanup called before calling useEffect() again
      window.removeEventListener('resize', checkSize);
    }
  });
  console.log('render');  // will be called twice

return <>
  <h1>window</h1>
  <h2>{size} PX</h2>
  </>;
};

export default UseEffectCleanup;
