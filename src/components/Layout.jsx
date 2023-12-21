import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import {
  AnimatedBackground,
  CommonBackground,
} from 'pages/Background/Background';
import { useAuth } from 'hooks/useAuth';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {isLoggedIn ? <CommonBackground /> : <AnimatedBackground />}
    </>
  );
};
