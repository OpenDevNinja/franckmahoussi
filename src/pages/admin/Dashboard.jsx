import { useEffect, useState } from 'react';
import { 
  FaBox, FaUsers, FaShoppingCart, FaChartLine, 
  FaCheckCircle, FaClock, FaBlog, FaBitcoin, 
  FaWhatsapp, FaTimesCircle, FaPlus, FaExternalLinkAlt 
} from 'react-icons/fa';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';
import LoadingSpinner from '../../components/common/Loading';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    verifiedAccounts: 0,
    pendingAccounts: 0,
    services: 0,
    blogs: 0,
    cryptos: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Tableau de bord | Admin F M Services";
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [
        productsQuery,
        servicesQuery,
        blogsQuery,
        cryptosQuery
      ] = await Promise.all([
        getDocs(collection(db, 'products')),
        getDocs(collection(db, 'services')),
        getDocs(collection(db, 'blogPosts')),
        getDocs(collection(db, 'cryptoVerifications'))
      ]);

      setStats({
        products: productsQuery.size,
        services: servicesQuery.size,
        blogs: blogsQuery.size,
        cryptos: cryptosQuery.size
      });
    } catch (error) {
      console.error("Erreur lors du chargement des statistiques:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  const statCards = [
    { 
      title: "Produits", 
      value: stats.products, 
      icon: <FaBox className="text-2xl" />, 
      color: "bg-blue-100 text-blue-600",
      trend: stats.products > 0 ? "up" : "neutral",
      link: "/admin/products"
    },
    { 
      title: "Services", 
      value: stats.services, 
      icon: <FaShoppingCart className="text-2xl" />, 
      color: "bg-purple-100 text-purple-600",
      trend: stats.services > 0 ? "up" : "neutral",
      link: "/admin/services"
    },
    { 
      title: "Articles de blog", 
      value: stats.blogs, 
      icon: <FaBlog className="text-2xl" />, 
      color: "bg-indigo-100 text-indigo-600",
      trend: stats.blogs > 0 ? "up" : "neutral",
      link: "/admin/blog"
    },
    { 
      title: "Cryptos tendances", 
      value: stats.cryptos, 
      icon: <FaBitcoin className="text-2xl" />, 
      color: "bg-orange-100 text-orange-600",
      trend: stats.cryptos > 0 ? "up" : "neutral",
      link: "/admin/verification"
    }
  ];

  const renderTrendIndicator = (trend) => {
    if (trend === "up") {
      return (
        <span className="ml-2 flex items-center text-green-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 7a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L12 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0112 7z" clipRule="evenodd" />
          </svg>
        </span>
      );
    } else if (trend === "down") {
      return (
        <span className="ml-2 flex items-center text-red-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 13a1 1 0 01-.707.293l-4-4a1 1 0 011.414-1.414L12 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0112 13z" clipRule="evenodd" />
          </svg>
        </span>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6 p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Tableau de bord</h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <a href={stat.link} className="block">
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.title}</p>
                    <div className="flex items-center mt-2">
                      <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                      {renderTrendIndicator(stat.trend)}
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center text-xs font-medium text-primary-600 hover:underline">
                    Voir détails <FaExternalLinkAlt className="ml-1" size={10} />
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Produits récents</h2>
            <a href="/admin/products" className="text-sm text-primary-600 hover:underline flex items-center">
              Voir tout <FaExternalLinkAlt className="ml-1" size={12} />
            </a>
          </div>
          <RecentProductsList />
        </div>

        {/* Recent Verifications */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Vérifications récentes</h2>
            <a href="/admin/verification" className="text-sm text-primary-600 hover:underline flex items-center">
              Voir tout <FaExternalLinkAlt className="ml-1" size={12} />
            </a>
          </div>
          <RecentVerificationsList />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-8">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Actions rapides</h2>
          <p className="text-sm text-gray-500 mt-1">Gérez rapidement votre contenu</p>
        </div>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/admin/products/add"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-md"
          >
            <FaBox className="mr-2" />
            Ajouter un produit
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/admin/services/add"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-md"
          >
            <FaShoppingCart className="mr-2" />
            Ajouter un service
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/admin/blog/add"
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-md"
          >
            <FaBlog className="mr-2" />
            Ajouter un article
          </motion.a>
        </div>
      </div>
    </div>
  );
};

// Composant pour afficher les produits récents
const RecentProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis())
          .slice(0, 5);
        setProducts(productsData);
      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentProducts();
  }, []);

  if (loading) return (
    <div className="p-6 text-center">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="divide-y divide-gray-100">
      {products.length > 0 ? (
        products.map((product, index) => (
          <a 
            key={product.id} 
            href={`/admin/products/edit/${product.id}`}
            className="block p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden bg-gray-200 shadow-inner">
                {product.images?.[0] ? (
                  <img 
                    className="h-full w-full object-cover" 
                    src={product.images[0]} 
                    alt={product.name} 
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-400">
                    <FaBox />
                  </div>
                )}
              </div>
              <div className="ml-4 flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                <p className="text-xs text-gray-500 mt-1">{product.category}</p>
              </div>
              <div className="ml-4">
                <span className="text-sm font-semibold text-gray-900">{product.price}XOF</span>
              </div>
            </div>
          </a>
        ))
      ) : (
        <div className="p-6 text-center text-sm text-gray-500">
          Aucun produit trouvé
        </div>
      )}
    </div>
  );
};

// Composant pour afficher les vérifications récentes
const RecentVerificationsList = () => {
  const [verifications, setVerifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentVerifications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cryptoVerifications'));
        const verificationsData = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis())
          .slice(0, 5);
        setVerifications(verificationsData);
      } catch (error) {
        console.error("Erreur lors du chargement des vérifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentVerifications();
  }, []);

  if (loading) return (
    <div className="p-6 text-center">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <FaCheckCircle className="mr-1" /> Vérifié
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <FaTimesCircle className="mr-1" /> Rejeté
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <FaClock className="mr-1" /> En attente
          </span>
        );
    }
  };

  return (
    <div className="divide-y divide-gray-100">
      {verifications.length > 0 ? (
        verifications.map(verification => (
          <div key={verification.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{verification.name}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded">
                    {verification.cryptoType}
                  </span>
                  {getStatusBadge(verification.status)}
                </div>
              </div>
              <div className="ml-4">
                <a 
                  href={`https://wa.me/${verification.phone.replace(/\D/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700 transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-6 text-center text-sm text-gray-500">
          Aucune vérification trouvée
        </div>
      )}
    </div>
  );
};

export default Dashboard;