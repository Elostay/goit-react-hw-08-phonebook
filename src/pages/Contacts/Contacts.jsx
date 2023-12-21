import ContactForm from 'components/ContactForm/ContactForm';

import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAction } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

import { Container } from 'GlobalStyles.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
