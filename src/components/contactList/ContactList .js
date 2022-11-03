import PropTypes from 'prop-types';
import { DeleteButton } from './ContactList .module';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/slices/sliceContacts';
import { getFilterValue, getContactsValue } from 'redux/selectors/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const allContacts = useSelector(getContactsValue);
  const contacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
                  onClick={() => dispatch(remove(contact.id))}
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
};
