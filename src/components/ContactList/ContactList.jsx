import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import ContactListItem from './ContactListItem';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContactsAction } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  return (
    <List>
      {isLoading && !error && <b>Request in progress</b>}
      {contacts.map(({ name, id, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
