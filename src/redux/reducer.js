import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
