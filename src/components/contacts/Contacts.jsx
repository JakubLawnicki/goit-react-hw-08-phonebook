import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import styles from './contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles['primary-wrapper']}>
      <UserMenu />
      <div className={styles['secondary-wrapper']}>
        <div className={styles['tertiary-wrapper']}>
          <ContactForm />
          <Filter />
        </div>
        <ContactList />
      </div>
    </div>
  );
};
