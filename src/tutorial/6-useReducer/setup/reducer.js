export const reducer = (state, action) => {
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
