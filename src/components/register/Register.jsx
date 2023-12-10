import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/operations';
import styles from './register.module.css';

export const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createUser({ name, email, password }));
  };

  return (
    <div className={styles['register-wrapper']}>
      <h2 className={styles['register-title']}>Create an account</h2>
      <form className={styles.form}>
        <label className={styles['input-wrapper']}>
          Your username
          <input
            type="text"
            name="name"
            value={name}
            className={styles['input-field']}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={styles['input-wrapper']}>
          Your e-mail
          <input
            type="email"
            name="email"
            value={email}
            className={styles['input-field']}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className={styles['input-wrapper']}>
          Set your password
          <input
            type="password"
            name="password"
            value={password}
            className={styles['input-field']}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};
