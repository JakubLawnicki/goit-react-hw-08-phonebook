import styles from './home.module.css';

export const Home = () => {
  return (
    <div className={styles['homepage-wrapper']}>
      <h1 className={styles['homepage-title']}>Phonebook</h1>
      <p className={styles['homepage-text']}>
        Just log in and enjoy using phonebook!
      </p>
      <p className={styles['homepage-text']}>
        If you do not have an account, just register!
      </p>
    </div>
  );
};
