import { motion } from 'framer-motion';
import { 
  FaArrowRight, 
  FaBitcoin, 
  FaShippingFast, 
  FaChartLine, 
  FaShieldAlt,
  FaEthereum,
  FaDollarSign,
  FaGem
} from 'react-icons/fa';
import { 
  SiBinance, 
  SiSolana, 
  SiRipple, 
  SiDogecoin, 
  SiCardano,
  SiLitecoin,
  SiPolkadot,
  SiChainlink
} from 'react-icons/si';
import { BsFillCreditCardFill, BsCoin } from 'react-icons/bs';
import { GiPayMoney, GiMoneyStack } from 'react-icons/gi';

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

  const spin = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
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

  // Crypto icons data
  const cryptoIcons = [
    { icon: <FaBitcoin className="text-yellow-500" />, size: 'text-3xl', delay: 0 },
    { icon: <FaEthereum className="text-purple-400" />, size: 'text-2xl', delay: 1 },
    { icon: <SiBinance className="text-yellow-400" />, size: 'text-2xl', delay: 2 },
    { icon: <SiSolana className="text-green-400" />, size: 'text-xl', delay: 3 },
    { icon: <SiRipple className="text-blue-400" />, size: 'text-2xl', delay: 1.5 },
    { icon: <SiDogecoin className="text-amber-300" />, size: 'text-xl', delay: 2.5 },
    { icon: <SiCardano className="text-blue-300" />, size: 'text-lg', delay: 3.5 },
    { icon: <SiLitecoin className="text-gray-300" />, size: 'text-xl', delay: 4 },
    { icon: <SiPolkadot className="text-pink-400" />, size: 'text-lg', delay: 4.5 },
    { icon: <SiChainlink className="text-blue-200" />, size: 'text-xl', delay: 5 },
    { icon: <BsCoin className="text-amber-200" />, size: 'text-2xl', delay: 1.2 },
    { icon: <GiPayMoney className="text-green-300" />, size: 'text-xl', delay: 2.2 },
    { icon: <GiMoneyStack className="text-emerald-300" />, size: 'text-2xl', delay: 3.2 },
    { icon: <FaDollarSign className="text-green-200" />, size: 'text-xl', delay: 1.8 },
    { icon: <FaGem className="text-teal-300" />, size: 'text-lg', delay: 2.8 }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-accent-800 to-primary-900 text-light-50 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated crypto icons floating around */}
        {cryptoIcons.map((crypto, index) => (
          <motion.div 
            key={index}
            className={`absolute opacity-20 ${crypto.size}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={floating}
            animate="animate"
            initial={{ opacity: 0 }}
            transition={{ delay: crypto.delay, duration: 0.5 }}
          >
            <motion.div variants={pulse}>
              {crypto.icon}
            </motion.div>
          </motion.div>
        ))}

        {/* Large spinning crypto circle */}
        <motion.div 
          className="absolute -right-32 -top-32 w-64 h-64 rounded-full border-2 border-secondary-400/20"
          variants={spin}
          animate="animate"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${['text-yellow-400', 'text-purple-400', 'text-blue-400', 'text-green-400'][i % 4]} text-xl`}
              style={{
                left: `${50 + 45 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                top: `${50 + 45 * Math.sin((i * 45 * Math.PI) / 180)}%`
              }}
            >
              {[<FaBitcoin />, <FaEthereum />, <SiBinance />, <SiSolana />, <SiRipple />, <SiDogecoin />, <SiCardano />, <SiLitecoin />][i]}
            </motion.div>
          ))}
        </motion.div>

        {/* Grid pattern with animation */}
        <motion.div 
          className="absolute inset-0 bg-grid-light-50/[0.03]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Gradient overlay with animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/80"
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
              className="inline-block bg-gradient-to-r from-secondary-500 to-accent-500 text-xs font-semibold py-1 px-3 rounded-full"
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
              className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-300 bg-[length:200%_auto]"
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
            className="text-lg md:text-xl text-light-300 mb-10 max-w-3xl mx-auto"
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
              className="relative overflow-hidden group bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-light-50 px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <span className="relative z-10 flex items-center">
                Découvrir nos services <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            
            <motion.a 
              href="#crypto" 
              className="relative overflow-hidden group bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-light-50 px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              <span className="relative z-10 flex items-center">
                Vérification Crypto <FaShieldAlt className="ml-3 group-hover:rotate-12 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-light-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>

          {/* Features grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            variants={container}
          >
            {[
              { icon: <FaShippingFast />, color: 'primary', title: 'Livraison Rapide', desc: 'Partout dans le monde' },
              { icon: <FaChartLine />, color: 'accent', title: 'Formations Crypto', desc: 'Experts certifiés' },
              { icon: <FaShieldAlt />, color: 'secondary', title: 'Sécurité', desc: 'Transactions sécurisées' },
              { icon: <FaBitcoin />, color: 'yellow', title: 'Paiements Crypto', desc: 'Multi-devises' }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className={`bg-light-50/5 backdrop-blur-sm p-4 rounded-lg border border-light-50/10 hover:border-${feature.color}-400/30 transition-all`}
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
                <p className="text-sm text-light-300">{feature.desc}</p>
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
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-900 to-transparent pointer-events-none"
      />

      {/* Subtle floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-light-50/5"
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

      {/* Animated crypto price ticker */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 bg-primary-800/30 backdrop-blur-sm py-2 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center mx-8">
              {[
                { coin: 'BTC', price: '$42,850.32', change: '+2.4%', icon: <FaBitcoin className="text-yellow-500 mr-2" /> },
                { coin: 'ETH', price: '$2,350.75', change: '+1.8%', icon: <FaEthereum className="text-purple-400 mr-2" /> },
                { coin: 'BNB', price: '$305.20', change: '-0.5%', icon: <SiBinance className="text-yellow-400 mr-2" /> },
                { coin: 'SOL', price: '$95.60', change: '+5.2%', icon: <SiSolana className="text-green-400 mr-2" /> },
                { coin: 'XRP', price: '$0.532', change: '+0.8%', icon: <SiRipple className="text-blue-400 mr-2" /> },
                { coin: 'ADA', price: '$0.38', change: '-1.2%', icon: <SiCardano className="text-blue-300 mr-2" /> },
                { coin: 'DOT', price: '$6.25', change: '+3.1%', icon: <SiPolkadot className="text-pink-400 mr-2" /> },
                { coin: 'DOGE', price: '$0.082', change: '+7.5%', icon: <SiDogecoin className="text-amber-300 mr-2" /> }
              ].map((crypto, idx) => (
                <div key={idx} className="flex items-center mx-6 text-sm">
                  {crypto.icon}
                  <span className="font-medium mr-1">{crypto.coin}</span>
                  <span className="mr-1">{crypto.price}</span>
                  <span className={`${crypto.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {crypto.change}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;