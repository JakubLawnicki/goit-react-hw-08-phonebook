import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const AuthNav = () => {
  return <StyledLink to="/contacts">Contacts</StyledLink>;
};
const UnauthNav = () => {
  return (
    <>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="login">Login</StyledLink>
    </>
  );
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <StyledLink to="home">Home</StyledLink>
      {isLoggedIn ? <AuthNav /> : <UnauthNav />}
    </div>
  );
};
