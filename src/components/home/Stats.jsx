import { motion } from 'framer-motion';
import { FaBoxOpen, FaUsers, FaSmile, FaTruck } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const stats = [
  { 
    value: "1,000+", 
    label: "Produits Vendus", 
    icon: <FaBoxOpen />,
    color: "from-secondary-400 to-secondary-500"
  },
  { 
    value: "500+", 
    label: "Clients Satisfaits", 
    icon: <FaUsers />,
    color: "from-accent-300 to-accent-500"
  },
  { 
    value: "99%", 
    label: "Satisfaction Client", 
    icon: <FaSmile />,
    color: "from-primary-300 to-primary-400"
  },
  { 
    value: "24h", 
    label: "Livraison Express", 
    icon: <FaTruck />,
    color: "from-light-400 to-light-500"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-6">

              
      <SectionHeader
  title=" Notre Impact en Chiffres"
  subtitle="Des résultats qui parlent d'eux-mêmes et une qualité de service inégalée "
  animationDelay={0.2}
  subtitleClassName="text-primary-100"
/>
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className={`bg-gradient-to-br ${stat.color} p-0.5 rounded-xl h-full`}>
                <div className="bg-primary-700 rounded-xl p-8 h-full flex flex-col items-center transition-all duration-300 hover:bg-opacity-50">
                  <div className="mb-6 p-4 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
                    <div className="text-3xl text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-3 font-heading bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
                    {stat.value}
                  </h3>
                  <p className="text-lg text-primary-100 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;