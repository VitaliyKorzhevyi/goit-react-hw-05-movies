import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

import css from "./styled/Layout.module.css"

const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
