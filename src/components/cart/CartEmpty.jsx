import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-20 text-center"
    >
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaShoppingCart className="text-3xl text-primary-600" />
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
        <p className="text-gray-600 mb-8">
          Vous n'avez pas encore ajouté d'articles à votre panier. Commencez vos achats pour découvrir nos produits et services.
        </p>
        
        <Link
          to="/products"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Explorer nos produits
        </Link>
      </div>
    </motion.div>
  );
};

export default CartEmpty;