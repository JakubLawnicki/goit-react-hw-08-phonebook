import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/operations';
import { selectUserEmail, selectUserName } from 'redux/selectors';
import styles from './userMenu.module.css';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.username}>{userName}</p>
        <p className={styles.usermail}>{userEmail}</p>
      </div>
      <button className={styles.button} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
