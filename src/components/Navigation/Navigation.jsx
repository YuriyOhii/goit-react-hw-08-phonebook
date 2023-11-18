import { UserMenu } from 'components/UserMenu/UserMenu';
import { Nav, NavigationLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      {isLoggedIn ? (
        <>
          <NavigationLink to={'/contacts'}>Contacts</NavigationLink>
          <UserMenu />
        </>
      ) : (
        <>
          <NavigationLink to={'/login'}>Login</NavigationLink>
          <NavigationLink to={'/register'}>Register</NavigationLink>
        </>
      )}
    </Nav>
  );
};
