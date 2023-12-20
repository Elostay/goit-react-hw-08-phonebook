import { selectFilterValue } from '../../redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilterAction } from '../../redux/filter/filterSlice';
import { TextField } from '@mui/material';
import { FilterContainer } from './Filter.styled';

const Filter = () => {
  const { filter } = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setSearchFilterAction(e.target.value));
  };

  return (
    <FilterContainer>
      <TextField
        id="standard-basic"
        label="Find contacts by name"
        variant="standard"
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Enter contact name"
        color="secondary"
      />
    </FilterContainer>
  );
};

export default Filter;
