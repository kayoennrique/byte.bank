import Header from 'components/Header';
import Footer from 'components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function PageDefault() {
  const location = useLocation();

  return (
    <div className="page-content">
      <Header path={location.pathname} />
      <Outlet />
      {(location.pathname === '/' || location.pathname === '*') && <Footer />}
    </div>
  );
}
