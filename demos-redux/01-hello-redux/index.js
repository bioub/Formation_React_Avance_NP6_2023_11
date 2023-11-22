import { legacy_createStore } from 'redux';

const initialState = {
  name: 'Romain',
  likes: 10,
};

// Un reducer doit être une fonction pure
// - elle est prédictive, appelée avec un state et un action
// donnée elle a toujours le même retour
// - elle ne modifie pas ses paramètres, elle retourne un nouvel
// objet state
// - elle n'a de side-effect (appel à des APIs externe : réseau (fetch), database, localStorage)
// const nextState = reducer(state, action);
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return {
        ...state,
        likes: state.likes + 1,
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.newName,
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer);

console.log('initial state', store.getState());

// el.addEventListener('click', () => {})
store.subscribe(() => {
  console.log('current state', store.getState());
  console.log('name', store.getState().name);
  console.log('likes', store.getState().likes);
});

// el.dispatchEvent(new MouseEvent('click'))
store.dispatch({ type: 'INCREMENT_LIKES' });
store.dispatch({ type: 'UPDATE_NAME', newName: 'Toto' });
