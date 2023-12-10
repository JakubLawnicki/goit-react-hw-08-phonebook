import { Routes, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { Register } from './register/Register';
import { Login } from './login/Login';
import { Contacts } from './contacts/Contacts';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './routes/PrivateRoute';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <ProtectedRoute element={<Register />} redirect={'/contacts'} />
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute element={<Login />} redirect={'/contacts'} />
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={<PrivateRoute element={<Contacts />} redirect={'/login'} />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
