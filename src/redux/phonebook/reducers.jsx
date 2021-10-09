// import types from './types';
import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {addContact, delContact, filterContacts} from './actions';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// const items = (state = [], {type, payload}) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DEL:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
const items = createReducer([], {
  [addContact]: (state, {payload}) => [...state, payload],
  [delContact]: (state, {payload}) =>
    state.filter(contact => contact.id !== payload),
});

// const filter = (state = '', {type, payload}) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  [filterContacts]: (state, {payload}) => payload,
});

export const contacts = combineReducers({
  items: items,
  filter: filter,
});
