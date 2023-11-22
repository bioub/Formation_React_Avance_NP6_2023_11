import rtk from '@reduxjs/toolkit';

/*
function createAction(type) {
  return function (payload) {
    return {
      type: type,
      payload: payload
    }
  }
}
*/

export const incrementLikes = rtk.createAction('INCREMENT_LIKES');
export const updateName = rtk.createAction('UPDATE_NAME');
