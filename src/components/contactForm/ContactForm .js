import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormInput, Label, Input } from './ContactForm .styled';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getContactsValue } from 'redux/selectors/selectors';
import { addContact } from '../../../src/redux/operations/operations';

function ContactForm({ onSubmit }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsValue);

  const [inputName, setName] = useState('');
  const [inputNumber, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (isNewContact(inputName, inputNumber)) {
      const newContact = makeContact(inputName, inputNumber);
      dispatch(addContact(newContact));
      reset();
    };

  };

  const makeContact = (name, number) => {
      return { name, number, };
  };

  const isNewContact = (name, number) => {
    if (contacts.items.find(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    if (contacts.items.find(contact => contact.number.includes(number))) {
      alert(`${number} is already in contacts.`);
      return false;
    }
    return true;
  };

  return (
    <FormInput onSubmit={onFormSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={inputName}
        onChange={handleInputChange}
        id={nameInputId}
      />
      <Label htmlFor={telInputId}> Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={inputNumber}
        onChange={handleInputChange}
        id={telInputId}
      />
      <button type="submit">Add to contact</button>
    </FormInput>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
