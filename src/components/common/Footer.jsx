import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { SiBitcoin, SiEthereum } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const hoverEffect = {
    hover: {
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-600 text-light-50 pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-secondary-400"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360],
              transition: {
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: "linear"
              }
            }}
          >
            {i % 2 === 0 ? <SiBitcoin /> : <SiEthereum />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              F M Services
            </h3>
            <p className="text-light-300 mb-6">
              Votre destination premium pour les produits technologiques, services de qualité et formations expertes en cryptomonnaies.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook />, color: 'text-primary-400 hover:text-secondary-400' },
                { icon: <FaTwitter />, color: 'text-primary-400 hover:text-accent-400' },
                { icon: <FaInstagram />, color: 'text-primary-400 hover:text-secondary-400' },
                { icon: <FaLinkedin />, color: 'text-primary-400 hover:text-accent-400' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  className={`${social.color} transition-colors text-xl`}
                  variants={item}
                  whileHover={{ 
                    y: -3,
                    scale: 1.1
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-4 text-light-100">Liens Rapides</h4>
            <ul className="space-y-2">
              {['Accueil', 'Produits', 'Services', 'Formations Crypto', 'Livraison'].map((link, i) => (
                <motion.li 
                  key={i}
                  variants={item}
                  whileHover="hover"
                >
                  <a 
                    href="#" 
                    className="text-light-300 hover:text-secondary-400 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-4 text-light-100">Services</h4>
            <ul className="space-y-2">
              {['Formations', 'Livraison Express', 'Stockage Sécurisé', 'Audit Crypto', 'Support 24/7'].map((service, i) => (
                <motion.li 
                  key={i}
                  variants={item}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <a href="#" className="text-light-300 hover:text-accent-400 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-4 text-light-100">Contactez-nous</h4>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start text-light-300"
                variants={item}
                whileHover={{ x: 3 }}
              >
                <span className="text-secondary-400 mr-2">📞</span>
                +229 97 34 85 03
              </motion.li>
              <motion.li 
                className="flex items-start text-light-300"
                variants={item}
                whileHover={{ x: 3 }}
              >
                <span className="text-secondary-400 mr-2">✉️</span>
                contact@franckmahoussi.com
              </motion.li>
              <motion.li 
                className="flex items-start text-light-300"
                variants={item}
                whileHover={{ x: 3 }}
              >
                <span className="text-secondary-400 mr-2">📍</span>
                123 Rue de la Tech, Pobe, Bénin
              </motion.li>
              <motion.li variants={item}>
                <motion.a 
                  href="https://wa.me/22997348503" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 5px 15px rgba(233, 182, 68, 0.4)'
                  }}
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-light-500 text-sm">
            &copy; {currentYear} F M Services. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Conditions générales', 'Politique de confidentialité', 'Mentions légales'].map((link, i) => (
              <motion.a 
                key={i}
                href="#" 
                className="text-light-500 hover:text-light-100 text-sm transition-colors"
                whileHover={{ 
                  color: '#E9B644',
                  textDecoration: 'underline'
                }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-secondary-500 hover:bg-secondary-600 text-white p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.1,
          backgroundColor: '#E9B644'
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;