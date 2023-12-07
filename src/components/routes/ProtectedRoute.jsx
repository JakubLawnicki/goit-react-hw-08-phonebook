import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element: Component, redirect }) => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? Component : <Navigate to={redirect} />;
};
