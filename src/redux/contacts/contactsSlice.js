import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContactAction, deleteContactAction, fetchContacts } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    updateFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(deleteContactAction.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items
          .filter(el => el.id !== payload.id);
      })
      .addCase(addContactAction.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
  },
});

export const {
  updateFilterAction,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
