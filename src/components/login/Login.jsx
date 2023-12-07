import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>

        <button type="submit"> Login</button>
      </form>
    </div>
  );
};
