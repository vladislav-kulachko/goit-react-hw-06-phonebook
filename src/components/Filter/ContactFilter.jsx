import s from './ContactFilter.module.scss';
import {connect} from 'react-redux';
import {filterContacts} from '../../redux/phonebook/actions';

function ContactFilter({findContact}) {
  return (
    <label className={s.label}>
      Find contact by name
      <input
        className={s.input}
        name="find"
        title="Введите имя или название контакта"
        onChange={e => findContact(e.target.value)}
      />
    </label>
  );
}
const mapDispatchToProps = dispatch => ({
  findContact: name => dispatch(filterContacts(name)),
});
export default connect(null, mapDispatchToProps)(ContactFilter);
