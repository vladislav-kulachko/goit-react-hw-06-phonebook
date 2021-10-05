import {useState, useEffect} from 'react';

import s from './App.module.scss';
import ContactForm from './components/Form/ContactForm';
import ContactFilter from './components/Filter/ContactFilter';
import ContactList from './components/List/ContactList';

export default function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? [],
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(
  //   s =>
  //     contacts !== s &&
  //     localStorage.setItem('contacts', JSON.stringify(contacts)),
  //   [contacts],
  // );

  // const handlerFindContact = e => {
  //   setFilter(e.target.value);
  // };

  return (
    <section className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm></ContactForm>
      <section className={s.contactsSection}>
        <h2 className={s.titleList}>Contacts list</h2>
        <ContactFilter
        // filterValue={filter}
        // handlerFindContact={handlerFindContact}
        ></ContactFilter>
        <ContactList></ContactList>
      </section>
    </section>
  );
}
