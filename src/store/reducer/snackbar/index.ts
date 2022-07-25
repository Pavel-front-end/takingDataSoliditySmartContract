import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageType, SnackbarState } from './types'

const initialState: SnackbarState = {
  message: '',
  type: 'success',
  open: false,
}

const { actions, reducer } = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<{ type: MessageType; message: string}>) => {
      state.open = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    hideNotification: (state) => {
      state.message = initialState.message
      state.open = initialState.open
    },
  },
});

export { actions as SnackbarActions };

export default reducer;