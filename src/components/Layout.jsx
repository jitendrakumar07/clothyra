import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
       <ScrollToTopButton />
    </>
  );
};

export default Layout;
