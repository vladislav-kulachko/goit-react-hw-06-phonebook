import s from './App.module.scss';
import ContactForm from './components/Form/ContactForm';
import ContactFilter from './components/Filter/ContactFilter';
import ContactList from './components/List/ContactList';

export default function App() {
  return (
    <section className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm></ContactForm>
      <section className={s.contactsSection}>
        <h2 className={s.titleList}>Contacts list</h2>
        <ContactFilter></ContactFilter>
        <ContactList></ContactList>
      </section>
    </section>
  );
}
