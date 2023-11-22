import { incrementLikes, updateName } from "./actions.js";
import rtk from "@reduxjs/toolkit";
import { reducer } from "./reducers.js";
import { likesSelector, nameSelector } from "./selectors.js";

const store = rtk.configureStore({ reducer: reducer });

console.log('initial state', store.getState());

// el.addEventListener('click', () => {})
store.subscribe(() => {
  console.log('current state', store.getState());
  console.log('name', nameSelector(store.getState()));
  console.log('likes', likesSelector(store.getState()));
});

// el.dispatchEvent(new MouseEvent('click'))
store.dispatch(incrementLikes());
store.dispatch(updateName('Toto'));