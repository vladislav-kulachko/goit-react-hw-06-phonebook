import {createAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
// import types from './types';

export const addContact = createAction('phonebook/add', (name, number) => ({
  payload: {id: uuidv4(), name: name, number: number},
}));
// export const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {id: uuidv4(), name: name, number: number},
// });

export const delContact = createAction('phonebook/delete');
// export const delContact = id => ({
//   type: types.DEL,
//   payload: id,
// });

export const filterContacts = createAction('phonebook/changeFilter');
// export const filterContacts = filter => ({
//   type: types.FILTER,
//   payload: filter,
// });
