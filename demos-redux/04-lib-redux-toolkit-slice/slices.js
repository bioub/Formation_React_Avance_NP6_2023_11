import rtk from '@reduxjs/toolkit';

const initialState = {
  name: 'Romain',
  likes: 10,
};

const slice = rtk.createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    incrementLikes(state, action) {
      state.likes++;
    },
    updateName(state, action) {
      state.name = action.payload;
    }
  }
});

export const { incrementLikes, updateName } = slice.actions;
export const reducer = slice.reducer;
