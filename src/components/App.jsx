import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRestrictedRoute } from './PublicRestrictedRoute';
import { reFreshUser } from 'redux/auth/operations';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reFreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>fetching User...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="login"
          element={
            <PublicRestrictedRoute
              component={<LoginPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="register"
          element={
            <PublicRestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo={'/login'} />
          }
        />
      </Route>
    </Routes>
  );
};
