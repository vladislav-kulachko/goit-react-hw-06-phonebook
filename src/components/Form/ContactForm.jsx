import {connect} from 'react-redux';
import {useState} from 'react';
import s from './ContactForm.module.scss';
import {addContact} from '../../redux/phonebook/actions';

function ContactForm({onSubmit, contacts}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerContactAdd = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
    }
  };
  const handlerSubmitFormClick = e => {
    e.preventDefault();
    if (name !== '' && number !== '') {
      if (contacts.find(contact => contact.number === number)) {
        alert(`Этот номер ${number} уже есть в списке`);
        return;
      } else if (contacts.find(contact => contact.name === name)) {
        alert(`Это имя ${name} уже есть в списке`);
        return;
      } else {
        onSubmit(name, number);
        setName('');
        setNumber('');
      }
    }
  };

  return (
    <form className={s.form} onSubmit={handlerSubmitFormClick}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handlerContactAdd}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handlerContactAdd}
        />
      </label>
      <button className={s.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
const mapStateToProps = ({contacts: {items}}) => ({
  contacts: items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
