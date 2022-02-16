import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
  user: string
};

const initialState: authState = {
  user: ''
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
