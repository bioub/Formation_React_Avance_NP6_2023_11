import { INCREMENT_LIKES, UPDATE_NAME } from "./constants.js";

const initialState = {
  name: 'Romain',
  likes: 10,
};

// const nextState = reducer(state, action);
export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_LIKES:
      return {
        ...state,
        likes: state.likes + 1,
      };
    case UPDATE_NAME: 
      return {
        ...state,
        name: action.payload,
      };
      default:
      return state;
  }
}