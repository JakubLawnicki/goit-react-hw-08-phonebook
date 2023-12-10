import { Navigation } from 'components/navigation/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export const Layout = () => {
  return (
    <div className={styles['layout-wrapper']}>
      <Navigation />
      <Outlet />
    </div>
  );
};
