import {v4 as uuidv4} from 'uuid';
import types from './types';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {id: uuidv4(), name: name, number: number},
});

export const delContact = id => ({
  type: types.DEL,
  payload: id,
});
export const filterContacts = filter => ({
  type: types.FILTER,
  payload: filter,
});
