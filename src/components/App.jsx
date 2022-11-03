import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
