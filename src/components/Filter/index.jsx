import { useDispatch } from 'react-redux';
import { updateFilterAction } from '../../redux/contacts/contactsSlice';

import './assets/inddex.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(updateFilterAction(target.value));
  };

  return <div className="filter-group">
    <label htmlFor="filter">Find contacts by name</label>
    <input
      onChange={handleChange}
      type="text"
      name="filter"
    />
  </div>;
};
