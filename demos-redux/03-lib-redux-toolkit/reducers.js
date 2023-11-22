import rtk from '@reduxjs/toolkit';
import { incrementLikes, updateName } from './actions.js';

const initialState = {
  name: 'Romain',
  likes: 10,
};

// const nextState = reducer(state, action);
// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case incrementLikes.type:
//       return {
//         ...state,
//         likes: state.likes + 1,
//       };
//     case updateName.type:
//       return {
//         ...state,
//         name: action.payload,
//       };
//       default:
//       return state;
//   }
// }

export const reducer = rtk.createReducer(initialState, (builder) => {
  builder
    .addCase(incrementLikes, (state, action) => {
      state.likes++; // sera traduit par redux toolkit
      // en { ...state, likes: state.likes + 1 }
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});
