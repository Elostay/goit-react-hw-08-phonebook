import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContactsAction } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/selectors';
import { ListContainer } from './ContactList.styled';

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

  return color;
}

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  return (
    <ListContainer>
      {isLoading && !error && <b>Request in progress</b>}
      {contacts.map(({ name, _id, number }) => (
        <ContactListItem
          key={_id}
          id={_id}
          name={name}
          number={number}
          color={generateRandomColor()}
        />
      ))}
    </ListContainer>
  );
};

export default ContactList;
