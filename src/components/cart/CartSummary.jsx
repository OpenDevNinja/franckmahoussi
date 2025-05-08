import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const CartSummary = ({ 
  cartTotal, 
  deliveryCost, 
  grandTotal, 
  deliveryOptions, 
  selectedDelivery, 
  onSelectDelivery,
  onCheckout
}) => {
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4"
    >
      <h3 className="text-xl font-bold mb-6">Récapitulatif</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Sous-total</span>
          <span className="font-medium">{cartTotal.toFixed(2)}€</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Livraison</span>
          <span className="font-medium">
            {selectedDelivery ? `${selectedDelivery.name} (${deliveryCost.toFixed(2)}€)` : 'Non sélectionnée'}
          </span>
        </div>
        
        <div className="border-t border-gray-200 pt-4 flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold text-xl text-primary-600">{grandTotal.toFixed(2)}€</span>
        </div>
      </div>
      
      <div className="mb-6">
        <button
          onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}
          className="w-full flex justify-between items-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <span>Options de livraison</span>
          <svg 
            className={`w-5 h-5 transform transition-transform ${isDeliveryOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isDeliveryOpen && (
          <div className="mt-2 border border-gray-200 rounded-lg p-4">
            {deliveryOptions.map(option => (
              <label 
                key={option.id}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <div>
                  <input
                    type="radio"
                    name="delivery"
                    checked={selectedDelivery?.id === option.id}
                    onChange={() => onSelectDelivery(option)}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-3 font-medium">{option.name}</span>
                  <p className="ml-6 text-sm text-gray-500">{option.description}</p>
                </div>
                <span className="font-medium">{option.price}€</span>
              </label>
            ))}
          </div>
        )}
      </div>
      
      <button
        onClick={onCheckout}
        disabled={!selectedDelivery}
        className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-colors ${selectedDelivery ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
      >
        <FaWhatsapp className="mr-2" />
        Passer la commande via WhatsApp
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        En cliquant sur ce bouton, vous serez redirigé vers WhatsApp pour finaliser votre commande.
      </p>
    </motion.div>
  );
};

export default CartSummary;