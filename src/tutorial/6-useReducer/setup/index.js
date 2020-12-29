import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  // this is where we deal with the state
  // must return some type of state
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added"
    };
  }
  if (action.type === 'NO_VALUE') {
    // just copy everything & flip only values that need changing
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value',
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person) => person.id != action.payload);
    return {
      ...state,
      people: newPeople,
    }
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    }
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
      const newItem = {id: new Date().getTime().toString(), name};
      dispatch({type:'ADD_ITEM', payload:newItem})  // must have `type`
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'});
    }
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  return <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit">add</button>
    </form>
    {state.people.map((person) => {
      return <div key={person.id} className="item">
        <h4>{person.name}</h4>
        <button onClick={() => dispatch({type:'REMOVE_ITEM', payload: person.id})}>remove</button>
      </div>
    })}
  </>;
};

export default Index;
