import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  return (
    <div>
      <StyledLink to="home">Home</StyledLink>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="login">Login</StyledLink>
      {/* <StyledLink to="/contacts">Contacts</StyledLink> */}
    </div>
  );
};
