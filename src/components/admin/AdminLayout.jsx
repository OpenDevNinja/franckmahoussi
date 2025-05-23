import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  FaTachometerAlt, 
  FaBox, 
  FaUsers, 
  FaSignOutAlt, 
  FaBlog, 
  FaCheck, 
  FaServicestack, 
  FaGratipay 
} from 'react-icons/fa';
import { 
  HiOutlineTruck, 
  HiOutlineCog, 
  HiOutlineUserCircle,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from 'react-icons/hi';
import { SiCryptpad } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!user) return null;

  const navItems = [
    { path: '/admin', icon: <FaTachometerAlt />, label: 'Tableau de bord' },
    { path: '/admin/products', icon: <FaBox />, label: 'Produits' },
    { path: '/admin/blog', icon: <FaBlog />, label: 'Blog' },
    { path: '/admin/trending-cryptos', icon: <SiCryptpad />, label: 'Cryptos' },
    // { path: '/admin/users', icon: <FaUsers />, label: 'Utilisateurs' },
    { path: '/admin/verification', icon: <FaCheck />, label: 'Compte Verifiés' },
    { path: '/admin/delivery-options', icon: <HiOutlineTruck />, label: 'Livraison' },
    { path: '/admin/services', icon: <FaServicestack />, label: 'Services' },
    { path: '/admin/testimonials', icon: <FaGratipay />, label: 'Témoignages' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Backdrop (Mobile only) */}
      {isMobile && !isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.div 
        className={`bg-gray-800 text-white fixed h-full z-30 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}
        initial={{ x: isMobile ? '-100%' : 0 }}
        animate={{ 
          x: isMobile && !isCollapsed ? 0 : (isMobile ? '-100%' : 0),
          width: isCollapsed ? '5rem' : '16rem'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-xl font-bold truncate">Admin F M Services</h1>
              <p className="text-sm text-gray-400 truncate">Bienvenue, {user.name}</p>
            </motion.div>
          )}
          {isCollapsed && (
            <div className="mx-auto">
              <HiOutlineUserCircle className="w-8 h-8 text-gray-300" />
            </div>
          )}
          
          <button 
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white ml-2 hidden md:block"
          >
            {isCollapsed ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  <span className={`${isCollapsed ? 'mx-auto' : 'mr-3'} text-lg`}>
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={logout}
            className={`flex items-center w-full p-3 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors ${
              isCollapsed ? 'justify-center' : 'justify-between'
            }`}
          >
            <FaSignOutAlt className="text-lg" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Déconnexion
              </motion.span>
            )}
          </button>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${
        isCollapsed ? 'md:ml-20' : 'md:ml-64'
      }`}>
        {/* Mobile Header */}
        <header className="bg-white shadow-sm p-4 flex items-center md:hidden">
          <button 
            onClick={toggleSidebar}
            className="text-gray-500 mr-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Admin F M Services</h1>
        </header>
        
        {/* Content */}
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;