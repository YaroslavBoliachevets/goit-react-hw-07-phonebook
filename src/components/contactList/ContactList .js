import PropTypes, { func } from 'prop-types';
import { DeleteButton } from './ContactList .module';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { remove } from 'redux/slices/sliceContacts';
import { getFilterValue, getContactsValue, getState } from 'redux/selectors/selectors';
import {fetchContacts} from "../../../src/redux/operations/operations";

function ContactList() {
  const dispatch = useDispatch();
  const state = useSelector(getState);
  const filter = useSelector(getFilterValue);
  const allContacts = useSelector(getContactsValue);
  const contacts = allContacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(()=> {
  //   console.log('update state', state);
  //   console.log('allContacts', allContacts);
  // }, [state, allContacts]);

  return (
    <>
      <ul>
        {contacts &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <DeleteButton
                  type="button"
                  // onClick={() => dispatch(remove(contact.id))}
                >
                  delete
                </DeleteButton>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
  fetchContacts: func, 
};
