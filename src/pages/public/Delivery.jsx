import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { deliveryOptions } from '../../data/deliveryOptions';

const Delivery = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Livraison | EliteShop";
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Options de Livraison</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez le mode de livraison qui correspond à vos besoins.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveryOptions.map(option => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Délai de livraison:</h4>
                  <p className="text-gray-700">{option.deliveryTime}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Caractéristiques:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {option.features.map((feature, i) => (
                      <li key={i} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary-600">{option.price}€</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;