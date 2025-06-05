import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Nav';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 