import { useDispatch } from 'react-redux';
import { deleteContactAction } from '../../redux/contacts/operations';
import Avatar from '@mui/material/Avatar';
import { Info, Item } from './ContactList.styled';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactListItem({ id, name, number, color }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAction(id));
  };
  return (
    <Item id={id}>
      <Info>
        <Avatar sx={{ bgcolor: color }}>{name}</Avatar>
        <p>{name}:</p> <p>{number}</p>
      </Info>

      <IconButton
        type="button"
        onClick={handleDelete}
        aria-label="delete"
        size="large"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Item>
  );
}
