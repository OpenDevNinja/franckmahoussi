import { motion } from "framer-motion";

export default function CryptoCard({ crypto, index }) {
  const isPositive = crypto.change.startsWith("+");
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="p-6">
        <div className="flex items-start mb-5">
          <div className="relative">
            <img
              className="w-12 h-12 object-contain mr-4"
              src={crypto.image}
              alt={crypto.name}
            />
            <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow">
              <span className={`badge ${isPositive ? 'badge-primary' : 'badge-accent'}`}>
                {crypto.change}
              </span>
            </span>
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-primary">
              {crypto.name}
            </h3>
            <p className="text-neutral-500">{crypto.symbol}</p>
          </div>
        </div>
        
        <p className="text-neutral-600 mb-5 line-clamp-3">{crypto.description}</p>
        
       
        
        <a
          href={crypto.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center group-hover:bg-primary/90"
        >
          <span>Obtenir maintenant</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}