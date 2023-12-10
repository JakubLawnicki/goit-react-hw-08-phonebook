import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';
import styles from './login.module.css';

export const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  return (
    <div className={styles['login-wrapper']}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles['input-wrapper']}>
          E-mail
          <input
            type="email"
            className={styles['input-field']}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className={styles['input-wrapper']}>
          Password
          <input
            type="password"
            className={styles['input-field']}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
