import PropTypes, { func } from 'prop-types';
import { DeleteButton } from './ContactList .module';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { remove } from 'redux/slices/sliceContacts';
import { getFilterValue, getStateContacts } from 'redux/selectors/selectors';
import { fetchContacts, deleteContact } from '../../../src/redux/operations/operations';

function ContactList() {
  const dispatch = useDispatch();

  const filter = useSelector(getFilterValue);
  const allContacts = useSelector(getStateContacts);
  const { items, isLoading, error } = allContacts;

  const contacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  }

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(()=> {
  //   console.log('update state', state);
  //   console.log('allContacts', allContacts);
  // }, [state, allContacts]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error =/</p>}
      <ul>
        {contacts &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <DeleteButton
                  type="button"
                  onClick={() => handleDelete(contact.id)}
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
