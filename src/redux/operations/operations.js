import axios from 'axios';
import {fetchingInProgress, fetchingSuccess, fetchingError} from 'redux/slices/sliceContacts';

axios.defaults.baseURL = 'https://63591a1cff3d7bddb998f6b6.mockapi.io'; 

export const fetchContacts = () => async dispatch => {
	try { 
		dispatch(fetchingInProgress());
		const responce = await axios.get('/contacts');
		dispatch(fetchingSuccess( responce.data));
		// console.log('responce.data', responce.data);
	}
	catch(e) {
		dispatch(fetchingError(e.message));
	}
};