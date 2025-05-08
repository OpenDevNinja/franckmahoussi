import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default Layout;