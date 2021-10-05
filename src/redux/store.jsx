import {createStore, combineReducers} from 'redux';
import {contacts} from './phonebook/reducer';

const rootReduser = combineReducers({
  contacts: contacts,
});
const store = createStore(rootReduser);
export default store;
