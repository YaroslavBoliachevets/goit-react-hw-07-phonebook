import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors/selectors';
import { filterContacts } from 'redux/slices/sliceFilter';

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilterValue);

  const changeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterContacts(value));
  };

  return (
    <>
      <label> Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        value={value}
        onChange={changeFilter}
      />
    </>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
