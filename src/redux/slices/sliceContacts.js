import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	contacts: {
	  items: [],
	  isLoading: false,
	  error: null,
	},
	filter: '',
  };	

const contactsFormSlice = createSlice({
	name:'contacts', 
	initialState: initialState,

	reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
      console.log("fetchingInProgress ", state);
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.contacts.items = action.payload;
      state.error = null;
      console.log("fetchingSuccess ", state);
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      console.log("fetchingError ", state);
    },
  }});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsFormSlice.actions;

  export const contactsReducer = contactsFormSlice.reducer;
