import { motion } from 'framer-motion';
import { FaArrowRight, FaBitcoin, FaShippingFast, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import { BsFillCreditCardFill } from 'react-icons/bs';

const Hero = () => {
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

  const floating = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulse = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const gradientText = {
    initial: { backgroundPosition: '0% 50%' },
    animate: {
      backgroundPosition: '100% 50%',
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Crypto floating coins */}
        <motion.div 
          className="absolute top-1/4 left-10 text-yellow-400 text-4xl opacity-30"
          variants={floating}
          animate="animate"
        >
          <motion.div variants={pulse}>
            <FaBitcoin />
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-20 text-gray-300 text-3xl opacity-30"
          variants={floating}
          animate="animate"
          style={{ animationDelay: '1s' }}
        >
          <motion.div variants={pulse}>
            <SiEthereum />
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/4 text-blue-400 text-2xl opacity-30"
          variants={floating}
          animate="animate"
          style={{ animationDelay: '2s' }}
        >
          <motion.div variants={pulse}>
            <BsFillCreditCardFill />
          </motion.div>
        </motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/5 right-1/4 text-purple-400 text-xl opacity-20"
          variants={floating}
          animate="animate"
          style={{ animationDelay: '1.5s' }}
        >
          <motion.div variants={pulse}>
            <FaChartLine />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 right-1/3 text-pink-400 text-3xl opacity-20"
          variants={floating}
          animate="animate"
          style={{ animationDelay: '2.5s' }}
        >
          <motion.div variants={pulse}>
            <FaShieldAlt />
          </motion.div>
        </motion.div>
        
        {/* Grid pattern with animation */}
        <motion.div 
          className="absolute inset-0 bg-grid-white/[0.03]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Gradient overlay with animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-6">
            <motion.span 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-semibold py-1 px-3 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plateforme Tout-en-Un
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-[length:200%_auto]"
              variants={gradientText}
              initial="initial"
              animate="animate"
            >
              L'avenir du commerce
            </motion.span>{" "}
            <br />et de la finance digitale
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            Vente de produits high-tech, formations expertes, services premium et solutions crypto sécurisées. 
            Tout ce dont vous avez besoin pour réussir dans l'ère digitale.
          </motion.p>
          
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <motion.a 
              href="#services" 
              className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <span className="relative z-10 flex items-center">
                Découvrir nos services <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            
            <motion.a 
              href="#crypto" 
              className="relative overflow-hidden group bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <span className="relative z-10 flex items-center">
                Vérification Crypto <FaShieldAlt className="ml-3 group-hover:rotate-12 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>

          {/* Features grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            variants={container}
          >
            {[
              { icon: <FaShippingFast />, color: 'purple', title: 'Livraison Rapide', desc: 'Partout dans le monde' },
              { icon: <FaChartLine />, color: 'blue', title: 'Formations Crypto', desc: 'Experts certifiés' },
              { icon: <FaShieldAlt />, color: 'pink', title: 'Sécurité', desc: 'Transactions sécurisées' },
              { icon: <FaBitcoin />, color: 'yellow', title: 'Paiements Crypto', desc: 'Multi-devises' }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className={`bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-${feature.color}-400/30 transition-all`}
                whileHover={{ 
                  y: -5,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`text-${feature.color}-400 text-2xl mb-2`}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated gradient bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
      />

      {/* Subtle floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 50],
            x: [0, (Math.random() - 0.5) * 30],
            opacity: [0.2, 0.8, 0.2],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
        />
      ))}
    </section>
  );
};

export default Hero;