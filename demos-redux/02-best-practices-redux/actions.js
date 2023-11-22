// Object Action devrait respecter la convention
// Flux Standard Action (FSA)
// https://github.com/redux-utilities/flux-standard-action
// en simplifié l'objet action
// doit avoir une clé type
// et éventuellement si l'action transporte une valeur
// une clé payload

import { INCREMENT_LIKES, UPDATE_NAME } from "./constants.js";

// un action creator est une fonction
// qui créé l'action et donc 2 composants différents
// pourront créer la même action de façon factorisée
export function incrementLikes() {
  return {
    type: INCREMENT_LIKES,
  };
}

export function updateName(newName) {
  return {
    type: UPDATE_NAME,
    payload: newName,
  };
}
