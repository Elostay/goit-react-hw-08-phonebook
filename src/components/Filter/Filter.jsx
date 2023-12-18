import { nanoid } from 'nanoid';
import { FilterLabel, Input, Container } from './Filter.styled';
import { selectFilterValue } from '../../redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilterAction } from '../../redux/filter/filterSlice';

const Filter = () => {
  const filterId = nanoid();
  const { filter } = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setSearchFilterAction(e.target.value));
  };

  return (
    <Container>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <Input
        type="text"
        value={filter}
        id={filterId}
        onChange={changeFilter}
        placeholder="Enter contact name"
      />
    </Container>
  );
};

export default Filter;
