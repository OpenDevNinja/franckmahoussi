import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { deliveryOptions } from '../../data/deliveryOptions';
import SectionHeader from '../../components/home/SectionHeader';
import { CheckCircleIcon, StarIcon, ArrowRightIcon, TruckIcon, RocketLaunchIcon, GlobeAltIcon, BoltIcon } from '@heroicons/react/24/solid';
import Hemelt from '../../components/common/Hemelt';

const iconComponents = {
  '🚛': TruckIcon,
  '✈️': RocketLaunchIcon,
  '⚡': BoltIcon,
  '🌍': GlobeAltIcon,
  '🚀': RocketLaunchIcon
};

const DeliveryOptionCard = ({ option }) => {
  const IconComponent = iconComponents[option.icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: option.id * 0.08
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 ${
        option.recommended 
          ? 'border-primary-500 shadow-primary-200/30' 
          : 'border-transparent'
      } hover:shadow-2xl transition-all duration-300 group`}
    >
      {option.recommended && (
        <div className="absolute top-1 right-1 bg-secondary text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg flex items-center z-10">
          <StarIcon className="w-4 h-4 mr-1" />
          Recommandé
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className={`p-3 rounded-lg ${
            option.recommended 
              ? 'bg-primary-100 text-primary-600' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {IconComponent ? (
              <IconComponent className="w-6 h-6" />
            ) : (
              <span className="text-2xl">{option.icon}</span>
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 ml-4">{option.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-6 border-b border-gray-100 pb-6">{option.description}</p>
        
        <div className="mb-6 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Délai:</span>
            <span className="text-lg font-semibold text-gray-800">{option.deliveryTime}</span>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">A partir de :</span>
            <span className="text-xl font-bold text-secondary">
              {option.price.toFixed(2)} XOF
            </span>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="font-medium text-gray-800 mb-4 flex items-center">
            <span className="w-4 h-0.5 bg-primary-500 mr-2"></span>
            Inclus dans cette offre:
          </h4>
          <ul className="space-y-3">
            {option.features.map((feature, i) => (
              <motion.li 
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 ${
            option.recommended 
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30' 
              : 'bg-white border-2 border-gray-200 text-gray-800 hover:border-primary-300'
          } transition-all`}
        >
          <span>Sélectionner</span>
          <ArrowRightIcon className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Delivery = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Options de Livraison | F M Services";
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-gradient-to-br from-gray-25 to-gray-50 min-h-screen">

       {/* helmet */}
        <Hemelt
         title="Nos Solutions de Livraison"
         subtitle="Choisissez l'option qui correspond à vos besoins"
        />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {deliveryOptions.map(option => (
            <DeliveryOptionCard key={option.id} option={option} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm overflow-hidden relative"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary-100 opacity-40"></div>
          <div className="relative z-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <span className="text-primary-600">Conseil d'expert</span> : Quelle option choisir ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe a analysé des milliers d'expéditions pour vous recommander la meilleure solution en fonction de vos besoins.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    <TruckIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pour les envois standards</h4>
                    <p className="text-gray-600 text-sm">L'option <span className="font-medium">Express</span> offre le meilleur rapport qualité-prix avec livraison en 24-48h</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    <BoltIcon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pour les urgences</h4>
                    <p className="text-gray-600 text-sm">Le service <span className="font-medium">Premium</span> garantit une livraison le jour même avec suivi en temps réel</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-8 inline-flex items-center text-primary-600 hover:text-primary-800 font-medium group">
              Parler à un conseiller
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Delivery;