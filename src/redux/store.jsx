import {createStore, combineReducers} from 'redux';
import {contacts} from './phonebook/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReduser = combineReducers({
  contacts: contacts,
});
const store = createStore(rootReduser, composeWithDevTools());
export default store;
