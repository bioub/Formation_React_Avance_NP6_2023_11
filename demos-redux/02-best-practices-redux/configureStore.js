import { legacy_createStore } from 'redux';

export function configureStore({ reducer, devTools = true }) {
   /** @type {import('redux').Store} */
  const store = legacy_createStore(reducer);

  // TODO configurer le store des middlewares (plugins)

  return store;
}