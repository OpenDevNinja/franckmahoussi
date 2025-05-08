import { motion } from 'framer-motion';
import { FaBoxOpen, FaUsers, FaSmile, FaTruck } from 'react-icons/fa';

const stats = [
  { value: "10,000+", label: "Produits Vendus", icon: <FaBoxOpen className="text-4xl" /> },
  { value: "5,000+", label: "Clients Satisfaits", icon: <FaUsers className="text-4xl" /> },
  { value: "98%", label: "Satisfaction Client", icon: <FaSmile className="text-4xl" /> },
  { value: "24h", label: "Livraison Express", icon: <FaTruck className="text-4xl" /> }
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 text-primary-200">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg text-primary-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;