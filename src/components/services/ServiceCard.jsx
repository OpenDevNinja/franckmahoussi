import { motion } from 'framer-motion';
import { FaStar, FaShoppingCart, FaClock, FaUserTie } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

const ServiceCard = ({ service }) => {
  const { addToCart } = useCart();

  const getCategoryColor = () => {
    switch (service.category) {
      case 'formation':
        return 'bg-blue-100 text-blue-800';
      case 'livraison':
        return 'bg-green-100 text-green-800';
      case 'stockage':
        return 'bg-purple-100 text-purple-800';
      case 'consultation':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = () => {
    switch (service.category) {
      case 'formation':
        return 'Formation';
      case 'livraison':
        return 'Livraison';
      case 'stockage':
        return 'Stockage';
      case 'consultation':
        return 'Consultation';
      default:
        return 'Service';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-2 left-2">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
            {getCategoryLabel()}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>

        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-300'} />
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <FaClock className="mr-1" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaUserTie className="mr-1" />
            <span>{service.format}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-primary-600">{service.price}XOF</span>
          <button
            onClick={() => addToCart(service, 'service')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg flex items-center transition-colors"
          >
            <FaShoppingCart className="mr-2" />
            Réserver
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;