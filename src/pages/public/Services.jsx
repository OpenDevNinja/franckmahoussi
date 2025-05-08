import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../../components/services/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'Tous les services' },
    { id: 'formation', name: 'Formations' },
    { id: 'livraison', name: 'Livraison' },
    { id: 'stockage', name: 'Stockage' },
    { id: 'consultation', name: 'Consultation' },
  ];

  useEffect(() => {
    document.title = "Services | EliteShop";
    window.scrollTo(0, 0);
  }, [location]);

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos services premium pour répondre à tous vos besoins technologiques.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide"
        >
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-medium ${activeCategory === category.id ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;