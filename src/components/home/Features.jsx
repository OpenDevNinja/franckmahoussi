import { motion } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaHeadset, FaMoneyBillWave } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-primary-600" />,
    title: "Sécurité Maximale",
    description: "Protection avancée pour vos achats et données personnelles."
  },
  {
    icon: <FaRocket className="text-3xl text-secondary-600" />,
    title: "Livraison Express",
    description: "Recevez vos produits en moins de 24h avec notre service premium."
  },
  {
    icon: <FaHeadset className="text-3xl text-accent-600" />,
    title: "Support 24/7",
    description: "Notre équipe est disponible à tout moment pour vous aider."
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-purple-600" />,
    title: "Paiement Sécurisé",
    description: "Transactions cryptées et multiples options de paiement."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Pourquoi choisir EliteShop?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous combinons qualité, rapidité et expertise pour une expérience client exceptionnelle.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;