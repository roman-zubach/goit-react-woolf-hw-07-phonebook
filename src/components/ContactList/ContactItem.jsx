import { useDispatch } from 'react-redux';
import { deleteContactAction } from '../../redux/contacts/operations';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(deleteContactAction(id));
  };

  return (
    <>
      <p>{name} {phone}</p>
      <button type="button" onClick={removeItem}>Remove</button>
    </>
  );
};
