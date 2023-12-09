import { updateFilter } from 'redux/filterSlice';
import styles from './filter.module.css';
import { useDispatch } from 'react-redux';

export function Filter() {
  const dispatch = useDispatch();

  const handleChange = value => {
    dispatch(updateFilter.updateFilter(value));
  };

  return (
    <div className={styles['filter-wrapper']}>
      <p className={styles['filter-text']}>Find contact by name</p>
      <input
        type="text"
        className={styles.input}
        onChange={e => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
}
