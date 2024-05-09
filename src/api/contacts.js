import axios from 'axios';
import { CONTACTS_API_DOMAIN } from '../constant/contacts';

const instance = axios.create({
  baseURL: CONTACTS_API_DOMAIN,
});

export const getContactsApi = async () => {
  const { data } = await instance.get('/contacts/');

  return data;
};

export const addContactApi = async contactData => {
  const { data } = await instance.post('/contacts/', contactData);

  return data;
};

export const deleteContactApi = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);

  return data;
};
