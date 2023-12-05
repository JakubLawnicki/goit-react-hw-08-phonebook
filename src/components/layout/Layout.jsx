import { Navigation } from 'components/navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
