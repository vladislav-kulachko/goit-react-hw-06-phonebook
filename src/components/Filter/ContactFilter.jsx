import s from './ContactFilter.module.scss';
// import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {filterValue} from '../../redux/phonebook/actions';

export default function ContactFilter() {
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contact by name
      <input
        className={s.input}
        name="find"
        title="Введите имя или название контакта"
        onChange={e => dispatch(filterValue(e.target.value))}
      />
    </label>
  );
}
// const mapDispatchToProps = dispatch => ({
//   findContact: e => dispatch(filterContacts(e.target.value)),
// });
// export default connect(null, mapDispatchToProps)(ContactFilter);
