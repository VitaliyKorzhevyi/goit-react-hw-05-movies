import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

import "./styled/Layout.css"

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
