import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age:24,
    message: 'random'
  });

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random');
  
  const changeMessage = () => {
    setMessage('hello');
  }

  // console.log(person);
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
