import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styles from './navigation.module.css';

const StyledLink = styled(NavLink)`
  color: white;
  margin-right: 20px;
  font-size: 24px;
  padding: 20px 10px;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
    color: green;
    background-color: white;
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
    <div className={styles['nav-wrapper']}>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn ? <AuthNav /> : <UnauthNav />}
    </div>
  );
};
