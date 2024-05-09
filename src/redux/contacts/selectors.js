import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectSortedContacts = createSelector(
  [selectContacts], (contacts) => [...contacts].sort((a, b) => b.id - a.id)
)

export const selectFilteredContacts = createSelector(
  [selectSortedContacts, selectFilter],
  (contacts, filter) => filter
    ? contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    : contacts
);
