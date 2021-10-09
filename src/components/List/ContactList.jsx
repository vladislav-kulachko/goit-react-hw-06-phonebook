import {connect} from 'react-redux';
import {delContact} from '../../redux/phonebook/actions';
import s from './ContactList.module.scss';

function ContactList({filteredContacts, delContact}) {
  return (
    <ul className={s.list}>
      {filteredContacts.length === 0 ? (
        <li className={s.notify}>
          Oops, this is empty... Please add your contacts!
        </li>
      ) : (
        filteredContacts.map(({id, name, number}) => (
          <li className={s.item} key={id}>
            {name}:<span className={s.phone}>{number}</span>
            <button
              className={s.button}
              id={id}
              type="button"
              onClick={delContact}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
const mapStateToProps = ({contacts: {items, filter}}) => ({
  filteredContacts: items.filter(
    ({name}) => name.toLowerCase().search(filter) !== -1,
  ),
});
const mapDispatchToProps = dispatch => ({
  delContact: e => dispatch(delContact(e.target.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
