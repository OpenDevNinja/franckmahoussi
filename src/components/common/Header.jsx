import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const cartItemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              F M Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `font-medium ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
            >
              Accueil
            </NavLink>
             <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium ${isActive ? "text-primary-600" : "text-dark-700 hover:text-primary-600"} transition-colors`
              } 
            >
              À Propos
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => `font-medium ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
            >
              Produits
            </NavLink>
            {/* <NavLink 
              to="/services" 
              className={({ isActive }) => `font-medium ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
            >
              Services
            </NavLink> */}
            <NavLink 
              to="/crypto-trending" 
              className={({ isActive }) => `font-medium ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
            >
               Cryptos
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => `font-medium ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
            >
              Blogs
            </NavLink>
            <NavLink 
              to="/delivery" 
              className={({ isActive }) => `font-medium ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
            >
              Livraison
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `font-medium ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
            >
              Contact
              </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link 
              to="/cart" 
              className="relative p-2 text-dark-700 hover:text-primary-600 transition-colors"
            >
              <FaShoppingCart className="text-xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {/* <Link 
              to="/admin" 
              className="hidden md:flex items-center space-x-1 p-2 text-dark-700 hover:text-primary-600 transition-colors"
            >
              <FaUser className="text-xl" />
              <span>Admin</span>
            </Link> */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-dark-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 p-4">
            <nav className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => `font-medium py-2 ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
              >
                Accueil
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => `font-medium py-2 ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
              >
                Produits
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `font-medium py-2 ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
              >
                Services
              </NavLink>
              <NavLink 
                to="/crypto-courses" 
                className={({ isActive }) => `font-medium py-2 ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
              >
                Formations Crypto
              </NavLink>
              <NavLink 
                to="/delivery" 
                className={({ isActive }) => `font-medium py-2 ${isActive ? 'text-primary-600' : 'text-dark-700 hover:text-primary-600'} transition-colors`}
              >
                Livraison
              </NavLink>
              <NavLink 
                to="/admin" 
                className="font-medium py-2 text-dark-700 hover:text-primary-600 transition-colors flex items-center space-x-2"
              >
                <FaUser />
                <span>Espace Admin</span>
              </NavLink>
              <a 
                href="https://wa.me/+22940302244" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium py-2 text-dark-700 hover:text-primary-600 transition-colors flex items-center space-x-2"
              >
                <FaWhatsapp />
                <span>Contact WhatsApp</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;