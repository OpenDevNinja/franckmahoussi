import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const navItems = [
    { path: '/admin', icon: <FaTachometerAlt />, label: 'Tableau de bord' },
    { path: '/admin/products', icon: <FaBox />, label: 'Produits' },
    { path: '/admin/services', icon: <FaShoppingCart />, label: 'Services' },
    { path: '/admin/users', icon: <FaUsers />, label: 'Utilisateurs' },
    { path: '/admin/settings', icon: <FaCog />, label: 'Paramètres' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-dark-800 text-white fixed h-full">
        <div className="p-4 border-b border-dark-700">
          <h1 className="text-xl font-bold">Admin F M Services</h1>
          <p className="text-sm text-gray-400">Bienvenue, {user.name}</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg ${location.pathname === item.path ? 'bg-primary-600' : 'hover:bg-dark-700'}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-dark-700">
          <button
            onClick={logout}
            className="flex items-center w-full p-3 rounded-lg hover:bg-dark-700"
          >
            <FaSignOutAlt className="mr-3" />
            Déconnexion
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;