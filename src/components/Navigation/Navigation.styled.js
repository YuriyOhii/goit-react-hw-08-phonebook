import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  transition: color 300ms;
  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;
