import types from './types';
import {combineReducers} from 'redux';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const items = (state = [], {type, payload}) => {
  switch (type) {
    case types.ADD:
      if (state.find(contact => contact.number === payload.number)) {
        alert('Этот номер уже есть в списке');
      } else if (state.find(contact => contact.name === payload.name)) {
        alert('Это имя уже есть в списке');
      } else return [...state, payload];
      break;
    case types.DEL:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', {type, payload}) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};

export const contacts = combineReducers({
  items: items,
  filter: filter,
});
