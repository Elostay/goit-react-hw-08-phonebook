import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from './filter/selectors';
import { selectContacts } from './contacts/selectors';

export const selectFilteredContacts = createSelector(
  [selectFilterValue, selectContacts],
  (filterValue, contacts) => {
    if (selectFilterValue === '') return;
    const normalizedFilter = filterValue.toLowerCase().trim();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
    return visibleContacts;
  }
);
