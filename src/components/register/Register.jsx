import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/operations';

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
    <div>
      <h2>Create an account</h2>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};
