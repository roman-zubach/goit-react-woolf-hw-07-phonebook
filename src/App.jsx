import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm, ContactList, Filter, Section } from './components';
import { fetchContacts } from './redux/contacts/operations';
import { selectError, selectIsLoading } from './redux/contacts/selectors';
import { Loader } from './common/components';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {error && <h1>{error}</h1>}
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
