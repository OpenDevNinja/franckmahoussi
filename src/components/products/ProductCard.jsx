import { motion } from 'framer-motion';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {product.stock < 10 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Bientôt épuisé
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <span className="font-bold text-primary-600">{product.price.toFixed(2)}€</span>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'} />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.rating})</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
          <button
            onClick={() => addToCart(product, 'product')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg flex items-center transition-colors"
          >
            <FaShoppingCart className="mr-2" />
            Ajouter
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;