import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import "./styled/Layout.css"
import Loader from './Loader';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
