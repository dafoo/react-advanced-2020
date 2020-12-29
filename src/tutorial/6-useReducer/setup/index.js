import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  // this is where we deal with the state
  // must return some type of state
  console.log(state, action);
  if (action.type === 'TESTING') {
    return {...state, people:data, isModalOpen: true, modalContent: "item added"};
  }
  // return state;
  throw new Error ('no matching action type');
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello',
}
const Index = () => {
  const [name,setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);  // reducer takes old state & action, spits back new state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({type:'TESTING'})  // must have `type`
    } else {
      dispatch({type: 'RANDOM'});
    }
  }

  return <>
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">add</button>
    </form>
    {state.people.map((person) => {
      return <div key={person.id}>
        <h4>{person.name}</h4>
      </div>
    })}
  </>;
};

export default Index;
