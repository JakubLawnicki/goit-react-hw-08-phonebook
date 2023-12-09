import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import styles from './contactList.module.css';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleClick = itemId => {
    dispatch(deleteContact(itemId));
  };

  if (isLoading && !error) {
    return (
      <div className={styles['list-wrapper']}>
        <p>Loading...</p>
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className={styles['list-wrapper']}>
        <p>Contact list is empty</p>
      </div>
    );
  }

  if (filter === '') {
    return (
      <div className={styles['list-wrapper']}>
        <h2 className={styles['list-header']}>Contacts</h2>
        <ul className={styles['contact-list']}>
          {contacts.map(item => (
            <li key={item.id}>
              <div className={styles.contact}>
                <div className={styles['contact-wrapper']}>
                  <p>
                    <span className={styles['contact-text']}>Name</span>

                    {item.name}
                  </p>
                  <p>
                    <span className={styles['contact-text']}>Phone</span>

                    {item.number}
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.button}
                  id={item.id}
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  let dispName;
  let dispNumber;
  let id;
  contacts.forEach(contact => {
    if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
      dispName = contact.name;
      dispNumber = contact.number;
      id = contact.id;
    }
  });

  return (
    <div className={styles['list-wrapper']}>
      <h2 className={styles['list-header']}>Contacts</h2>
      <ul className={styles['contact-list']}>
        <li key={id}>
          <div className={styles.contact}>
            <div className={styles['contact-wrapper']}>
              <p>
                <span className={styles['contact-text']}>Name</span>

                {dispName}
              </p>
              <p>
                <span className={styles['contact-text']}>Phone</span>

                {dispNumber}
              </p>
            </div>
            <button
              type="button"
              className={styles.button}
              id={id}
              onClick={() => {
                handleClick(id);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
