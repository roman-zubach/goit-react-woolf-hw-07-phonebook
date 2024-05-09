import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContactAction } from '../../redux/contacts/operations';

import './assets/index.css';

const defaultState = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(defaultState);
  const { name, phone } = formData;
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isNameExist = (newName) => {
    return contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase());
  };

  const clearState = () => {
    setFormData(defaultState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNameExist(name)) {
      window.alert(`${name} is already in contacts.`);

      return;
    }

    dispatch(addContactAction({ name, phone }));

    clearState();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="number">Number</label>
        <input
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};
