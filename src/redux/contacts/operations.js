import { createAsyncThunk } from '@reduxjs/toolkit';

import { addContactApi, deleteContactApi, getContactsApi } from '../../api/contacts';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getContactsApi();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactAction = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      return addContactApi(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactAction = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      return deleteContactApi(contactId);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
