import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/operations';
import { selectUserEmail, selectUserName } from 'redux/selectors';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <p>{userName}</p>
      <p>{userEmail}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
