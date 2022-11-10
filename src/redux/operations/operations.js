import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63591a1cff3d7bddb998f6b6.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const responce = await axios.post('/contacts', contact);
	  return responce.data;
    } catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const responce = await axios.delete(`/contacts/${id}`);
    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
})

// export const fetchContacts1 = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const responce = await axios.get('/contacts');
//     dispatch(fetchingSuccess(responce.data));
//     // console.log('responce.data', responce.data);
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

// export const addContact = () => async dispatch => {
//   console.log('add contact');
//   try {
//     // dispatch(addNewContact())
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
