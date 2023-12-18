import { useDispatch } from 'react-redux';
import { Item, Button, NumberContainer, Number } from './ContactList.styled';
import { deleteContactAction } from '../../redux/contacts/operations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAction(id));
  };
  return (
    <Item id={id}>
      <NumberContainer>
        <p>{name}:</p> <Number>{number}</Number>
      </NumberContainer>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactListItem;
