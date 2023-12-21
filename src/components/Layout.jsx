import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import {
  AnimatedBackground,
  CommonBackground,
} from 'components/Background/Backgrounds';
import { routes } from 'routes/routes';
import { useLocation } from 'react-router-dom/dist';

export const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {pathname === routes.contacts ? (
        <CommonBackground />
      ) : (
        <AnimatedBackground />
      )}
    </>
  );
};
