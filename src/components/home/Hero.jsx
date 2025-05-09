import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaBitcoin, FaShippingFast, FaChartLine, FaShieldAlt,
  FaEthereum, FaDollarSign, FaGem, FaCoins, FaWallet, FaExchangeAlt
} from 'react-icons/fa';
import { 
  SiBinance, SiSolana, SiRipple, SiDogecoin, SiCardano,
  SiLitecoin, SiPolkadot, SiChainlink, SiStellar, SiMonero,
  SiTether, SiBitcoincash, SiDash, SiZcash, SiEthereum
} from 'react-icons/si';
import { 
  BsFillCreditCardFill, BsCoin, BsCashCoin, BsBank2,
  BsGraphUp, BsPiggyBank, BsCurrencyExchange
} from 'react-icons/bs';
import { GiPayMoney, GiMoneyStack, GiCash, GiTwoCoins } from 'react-icons/gi';
import { RiExchangeFundsFill, RiStockFill } from 'react-icons/ri';

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

  // Floating animation with random parameters
  const floating = (delay = 0) => ({
    animate: {
      y: [0, (Math.random() - 0.5) * 40, 0],
      x: [0, (Math.random() - 0.5) * 30, 0],
      rotate: [0, (Math.random() - 0.5) * 20, 0],
      transition: {
        duration: 10 + Math.random() * 10,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "easeInOut"
      }
    }
  });

  // Pulse animation with random parameters
  const pulse = {
    animate: {
      scale: [1, 1.1 + Math.random() * 0.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Spin animation with random direction
  const spin = (reverse = false) => ({
    animate: {
      rotate: reverse ? -360 : 360,
      transition: {
        duration: 30 + Math.random() * 30,
        repeat: Infinity,
        ease: "linear"
      }
    }
  });

  // Bounce animation
  const bounce = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Gradient text animation
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

  // Crypto icons data with more variety
  const cryptoIcons = [
    { icon: <FaBitcoin />, color: 'text-yellow-500', size: 'text-3xl' },
    { icon: <FaEthereum />, color: 'text-purple-400', size: 'text-2xl' },
    { icon: <SiBinance />, color: 'text-yellow-400', size: 'text-2xl' },
    { icon: <SiSolana />, color: 'text-green-400', size: 'text-xl' },
    { icon: <SiRipple />, color: 'text-blue-400', size: 'text-2xl' },
    { icon: <SiDogecoin />, color: 'text-amber-300', size: 'text-xl' },
    { icon: <SiCardano />, color: 'text-blue-300', size: 'text-lg' },
    { icon: <SiLitecoin />, color: 'text-gray-300', size: 'text-xl' },
    { icon: <SiPolkadot />, color: 'text-pink-400', size: 'text-lg' },
    { icon: <SiChainlink />, color: 'text-blue-200', size: 'text-xl' },
    { icon: <SiStellar />, color: 'text-violet-300', size: 'text-lg' },
    { icon: <SiMonero />, color: 'text-orange-500', size: 'text-xl' },
    { icon: <SiTether />, color: 'text-emerald-400', size: 'text-lg' },
    { icon: <SiBitcoincash />, color: 'text-yellow-600', size: 'text-xl' },
    { icon: <SiDash />, color: 'text-blue-500', size: 'text-lg' },
    { icon: <SiZcash />, color: 'text-yellow-300', size: 'text-xl' },
    { icon: <BsCoin />, color: 'text-amber-200', size: 'text-2xl' },
    { icon: <GiPayMoney />, color: 'text-green-300', size: 'text-xl' },
    { icon: <GiMoneyStack />, color: 'text-emerald-300', size: 'text-2xl' },
    { icon: <FaDollarSign />, color: 'text-green-200', size: 'text-xl' },
    { icon: <FaGem />, color: 'text-teal-300', size: 'text-lg' },
    { icon: <FaCoins />, color: 'text-yellow-300', size: 'text-2xl' },
    { icon: <FaWallet />, color: 'text-blue-300', size: 'text-xl' },
    { icon: <FaExchangeAlt />, color: 'text-purple-300', size: 'text-lg' },
    { icon: <BsCashCoin />, color: 'text-green-400', size: 'text-xl' },
    { icon: <BsBank2 />, color: 'text-indigo-300', size: 'text-lg' },
    { icon: <BsGraphUp />, color: 'text-red-400', size: 'text-xl' },
    { icon: <BsPiggyBank />, color: 'text-pink-300', size: 'text-lg' },
    { icon: <BsCurrencyExchange />, color: 'text-cyan-400', size: 'text-xl' },
    { icon: <RiExchangeFundsFill />, color: 'text-orange-400', size: 'text-lg' },
    { icon: <RiStockFill />, color: 'text-lime-400', size: 'text-xl' },
    { icon: <GiTwoCoins />, color: 'text-amber-400', size: 'text-2xl' },
    { icon: <GiCash />, color: 'text-green-500', size: 'text-xl' }
  ];

  // Generate random positions for crypto icons
  const generateRandomPositions = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      top: `${5 + Math.random() * 90}%`,
      left: `${5 + Math.random() * 90}%`,
      delay: Math.random() * 5,
      reverse: Math.random() > 0.5,
      size: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 7)],
      opacity: 0.1 + Math.random() * 0.3
    }));
  };

  const randomPositions = generateRandomPositions(50);

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-accent-800 to-primary-900 text-light-50 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated crypto icons floating around */}
        {randomPositions.map((pos, index) => {
          const crypto = cryptoIcons[index % cryptoIcons.length];
          return (
            <motion.div 
              key={index}
              className={`absolute ${crypto.color} ${pos.size} opacity-${Math.floor(pos.opacity * 10)}`}
              style={{
                top: pos.top,
                left: pos.left,
              }}
              variants={floating(pos.delay)}
              animate="animate"
              initial={{ opacity: 0 }}
              transition={{ delay: pos.delay * 0.5, duration: 0.5 }}
            >
              <motion.div variants={pulse}>
                {crypto.icon}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Multiple spinning crypto circles */}
        {[1, 2, 3].map((circle) => (
          <motion.div 
            key={circle}
            className={`absolute ${circle === 1 ? 'w-64 h-64 -right-32 -top-32' : 
                         circle === 2 ? 'w-40 h-40 -left-20 bottom-1/4' : 
                         'w-52 h-52 left-1/4 -bottom-20'} 
                      rounded-full border-2 border-secondary-400/20`}
            variants={spin(circle % 2 === 0)}
            animate="animate"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute ${['text-yellow-400', 'text-purple-400', 'text-blue-400', 'text-green-400'][i % 4]} 
                           ${circle === 1 ? 'text-xl' : circle === 2 ? 'text-lg' : 'text-base'}`}
                style={{
                  left: `${50 + 45 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                  top: `${50 + 45 * Math.sin((i * 45 * Math.PI) / 180)}%`
                }}
              >
                {cryptoIcons[i % cryptoIcons.length].icon}
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Bouncing crypto coins */}
        {[1, 2, 3, 4, 5].map((coin) => (
          <motion.div
            key={coin}
            className={`absolute ${['text-yellow-400', 'text-purple-400', 'text-blue-400', 'text-green-400', 'text-pink-400'][coin % 5]} 
                       ${['text-2xl', 'text-xl', 'text-lg', 'text-3xl', 'text-base'][coin % 5]}`}
            style={{
              left: `${10 + coin * 15}%`,
              top: '80%'
            }}
            variants={bounce}
            animate="animate"
            transition={{ delay: coin * 0.3 }}
          >
            {cryptoIcons[coin % cryptoIcons.length].icon}
          </motion.div>
        ))}

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

        {/* Animated connecting lines between crypto icons */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {randomPositions.slice(0, 15).map((pos, i) => {
            if (i % 3 === 0 && i + 2 < randomPositions.length) {
              return (
                <motion.line
                  key={i}
                  x1={`${parseFloat(pos.left)}%`}
                  y1={`${parseFloat(pos.top)}%`}
                  x2={`${parseFloat(randomPositions[i+1].left)}%`}
                  y2={`${parseFloat(randomPositions[i+1].top)}%`}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity={0.1}
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
              );
            }
            return null;
          })}
        </svg>
      </div>

      {/* Content */}
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
              href="/services" 
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
              href="/verification"
              className="relative overflow-hidden group bg-secondary-600 hover:bg-secondary-700 border border-neutral-700 text-light-50 px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Floating crypto transaction animations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`tx-${i}`}
          className="absolute pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: ['text-xs', 'text-sm', 'text-base'][Math.floor(Math.random() * 3)]
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.8],
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatDelay: 10 + Math.random() * 20,
            ease: "easeInOut"
          }}
        >
          <div className={`flex items-center ${['text-green-400', 'text-red-400'][Math.floor(Math.random() * 2)]}`}>
            {Math.random() > 0.5 ? (
              <>
                <FaArrowRight className="mr-1" />
                <span>+{Math.random().toFixed(4)} BTC</span>
              </>
            ) : (
              <>
                <FaArrowRight className="mr-1 transform rotate-180" />
                <span>-{Math.random().toFixed(4)} ETH</span>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Hero;