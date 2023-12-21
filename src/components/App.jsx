import React, { lazy, useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from '../routes/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from '../routes/PrivateRoute';
import { routes } from 'routes/routes';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { register, login, home, contacts } = routes;
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <>
      <Routes>
        <Route path={home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={register}
            element={
              <RestrictedRoute
                redirectTo={contacts}
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path={login}
            element={
              <RestrictedRoute
                redirectTo={contacts}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path={contacts}
            element={
              <PrivateRoute redirectTo={login} component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={home} />} />
      </Routes>
    </>
  );
};

export default App;
