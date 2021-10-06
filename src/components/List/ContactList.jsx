import {connect} from 'react-redux';
import {delContact} from '../../redux/phonebook/actions';
import s from './ContactList.module.scss';

function ContactList({contacts, filter, delContact}) {
  return (
    <ul className={s.list}>
      {contacts.length === 0 ? (
        <li className={s.notify}>
          Oops, this is empty... Please add your contacts!
        </li>
      ) : (
        contacts
          .filter(({name}) => name.toLowerCase().search(filter) !== -1)
          .map(({id, name, number}) => (
            <li className={s.item} key={id}>
              {name}:<span className={s.phone}>{number}</span>
              <button
                className={s.button}
                id={id}
                type="button"
                onClick={e => delContact(e.target.id)}
              >
                Delete
              </button>
            </li>
          ))
      )}
    </ul>
  );
}
const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  delContact: id => dispatch(delContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
