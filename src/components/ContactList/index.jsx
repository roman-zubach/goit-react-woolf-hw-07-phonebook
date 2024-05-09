import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { ContactItem } from './ContactItem';

import './assets/index.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return <ul className='contact-list'>
    {contacts.map(({ id, name, phone }) => (
      <li className='contact-item' key={id}>
        <ContactItem id={id} name={name} phone={phone} />
      </li>
    ))}
  </ul>;
};
