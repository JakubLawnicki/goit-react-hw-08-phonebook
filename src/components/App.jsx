import { Routes, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { Register } from './register/Register';
import { Login } from './login/Login';
import { Contacts } from './contacts/Contacts';
import { Layout } from './layout/Layout';
import { PrivateRoute } from './routes/PrivateRoute';
import { ProtectedRoute } from './routes/ProtectedRoute';

export function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
        margin: 40,
        paddingLeft: 40,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="register"
            element={
              <ProtectedRoute element={<Register />} redirect={'/contacts'} />
            }
          ></Route>
          <Route
            path="login"
            element={
              <ProtectedRoute element={<Login />} redirect={'/contacts'} />
            }
          ></Route>
        </Route>
        <Route
          path="/contacts"
          element={<PrivateRoute element={<Contacts />} redirect={'/login'} />}
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
