import { createSlice } from '@reduxjs/toolkit';
import {
  addContactAction,
  deleteContactAction,
  fetchContactsAction,
} from '../../redux/contacts/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAction.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactAction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactAction.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
