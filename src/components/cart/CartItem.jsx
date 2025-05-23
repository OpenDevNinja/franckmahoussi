import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (value) => {
    const newQuantity = item.quantity + value;
    if (newQuantity > 0) {
      onUpdateQuantity(newQuantity);
    } else {
      onRemove();
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex"
    >
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium text-lg">{item.name}</h3>
          <button 
            onClick={onRemove}
            className="text-gray-400 hover:text-red-500"
          >
            <FaTimes />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mt-1">{item.description.substring(0, 60)}...</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button 
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-4 py-1">{item.quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
          
          <span className="font-bold text-lg">{(item.price * item.quantity).toFixed(2)}XOF</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;