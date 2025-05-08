import { useState } from 'react';
import { FaStar, FaShoppingCart, FaClock, FaUserTie, FaHeart, FaShare } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

const ServiceDetails = ({ service }) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const { addToCart } = useCart();

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...service, quantity }, 'service');
  };

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="bg-white rounded-lg overflow-hidden mb-4">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-2">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
            {getCategoryLabel()}
          </span>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-300'} />
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-2xl font-bold text-primary-600 mb-2">{service.price}€</p>
          <p className="text-gray-600">{service.description}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Détails:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaClock className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Durée</p>
                <p className="text-gray-600">{service.duration}</p>
              </div>
            </li>
            <li className="flex items-start">
              <FaUserTie className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Format</p>
                <p className="text-gray-600">{service.format}</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Ce qui est inclus:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {service.features.map((feature, i) => (
              <li key={i} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button 
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-2 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            <FaShoppingCart className="mr-2" />
            Ajouter au panier
          </button>
          
          <button
            onClick={() => setIsWishlist(!isWishlist)}
            className={`p-3 rounded-full ${isWishlist ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'}`}
          >
            <FaHeart />
          </button>
          
          <button className="p-3 rounded-full text-gray-400 hover:text-primary-600 hover:bg-primary-50">
            <FaShare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;