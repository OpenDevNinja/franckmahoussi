import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp, 
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaYoutube,
  FaTiktok
} from 'react-icons/fa';
import { 
  SiBitcoin, 
  SiEthereum,
  SiBinance,
  SiDogecoin
} from 'react-icons/si';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const floatingCoin = {
    animate: (i) => ({
      y: [0, (Math.random() - 0.5) * 40],
      x: [0, (Math.random() - 0.5) * 30],
      opacity: [0.3, 0.8, 0.3],
      rotate: [0, 360],
      transition: {
        duration: Math.random() * 20 + 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "linear",
        delay: i * 0.5
      }
    })
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FaFacebook />, color: 'hover:text-[#1877F2]', label: 'Facebook', link: "https://www.facebook.com/share/1Z8YwdhLzX/?mibextid=qi2Omg" },
     { icon: <FaInstagram />, color: 'hover:text-[#E1306C]', label: 'Instagram', link:'https://www.instagram.com/mahoussifranck?igsh=YzljYTk1ODg3Zg==' },
    { icon: <FaLinkedin />, color: 'hover:text-[#0A66C2]', label: 'LinkedIn', link:'https://www.linkedin.com/in/franck-mahoussi-ba84651a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { icon: <FaYoutube />, color: 'hover:text-[#FF0000]', label: 'YouTube', link:'https://www.youtube.com/@FranckMahoussi' },
    { icon: <FaTiktok />, color: 'hover:text-[#000000]', label: 'TikTok', link:'https://www.tiktok.com/@crypto.team.franc?_t=ZN-8wZWhy5nmDe&_r=1' }

  ];

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: ' Obtenir Crypto', path: '/crypto-trending' },
    { name: 'Livraison', path: '/delivery' }
  ];

  const legalLinks = [
    { name: 'Conditions générales', path: '/terms' },
    { name: 'Politique de confidentialité', path: '/privacy' },
    { name: 'Mentions légales', path: '/legal' }
  ];

  const cryptoIcons = [SiBitcoin, SiEthereum, SiBinance, SiDogecoin];

  return (
    <footer 
      className="bg-gray-900 text-white pt-20 pb-12 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const Icon = cryptoIcons[i % cryptoIcons.length];
          return (
            <motion.div
              key={i}
              className="absolute text-amber-400"
              style={{
                fontSize: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              custom={i}
              variants={floatingCoin}
              initial="hidden"
              animate={isInView ? "animate" : "hidden"}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Company Info */}
          <motion.div variants={item}>
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-secondary-600 to-secondary-600 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.02 }}
            >
              F M Services
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire premium pour les solutions technologiques innovantes, services haut de gamme et formations expertes en cryptomonnaies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.link}
                  target="_blank" 
                  className={`text-gray-400 ${social.color} transition-colors text-xl`}
                  variants={item}
                  whileHover={{ 
                    y: -3,
                    scale: 1.15
                  }}
                  aria-label={social.label}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-secondary-600 pb-2 inline-block">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={i}
                  variants={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-secondary-600 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-secondary-600 pb-2 inline-block">
              Newsletter
            </h4>
            <p className="text-gray-300 mb-4">
              Abonnez-vous pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <motion.form 
              className="space-y-3"
              whileHover={{ scale: 1.01 }}
            >
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-600 text-white"
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-secondary-600 hover:bg-secondary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                S'abonner
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-secondary-600 pb-2 inline-block">
              Contactez-nous
            </h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start text-gray-300"
                variants={item}
                whileHover={{ x: 3 }}
              >
                <span className="text-secondary-600 mr-3 mt-1">
                  <FaPhoneAlt />
                </span>
                <div>
                  
                  <a href="tel:+22997348503" className="hover:text-secondary-600 transition-colors">
                    +229 01 40 30 22 44
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start text-gray-300"
                variants={item}
                whileHover={{ x: 3 }}
              >
                <span className="text-secondary-600 mr-3 mt-1">
                  <FaEnvelope />
                </span>
                <div>
                  
                  <a href="mailto:supports@franckmahoussi.com" className="hover:text-secondary-600 transition-colors">
                   supports@franckmahoussi.com
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start text-gray-300"
                variants={item}
                whileHover={{ x: 3 }}
              >
                <span className="text-secondary-600 mr-3 mt-1">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  
                  <p>BOHICON Qt Agbanweme C/CB AKOVI ANTOINE</p>
                </div>
              </motion.li>
              
              <motion.li variants={item}>
                <motion.a 
                  href="https://wa.me/2290140302244" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-lg transition-colors"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 5px 15px rgba(37, 211, 102, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="mr-2 text-lg" />
                  Contact WhatsApp
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} F M Services. Tous droits réservés.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
            {legalLinks.map((link, i) => (
              <motion.a 
                key={i}
                href={link.path} 
                className="text-gray-400 hover:text-secondary-600 text-sm transition-colors"
                whileHover={{ 
                  color: '#F59E0B',
                  textDecoration: 'underline'
                }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div> */}
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-secondary-600 hover:bg-secondary-600 text-white p-3.5 rounded-full shadow-xl z-50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.5 }
        }}
        whileHover={{ 
          scale: 1.1,
          backgroundColor: '#D97706'
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Retour en haut"
      >
        <FaArrowUp className="text-lg" />
      </motion.button>
    </footer>
  );
};

export default Footer;