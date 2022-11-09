import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/sliceContacts';

export const store = configureStore({
  reducer: contactsReducer,
});