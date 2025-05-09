import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductDetails from '../../components/products/ProductDetails';
import { products } from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | F M Services`;
    } else {
      document.title = "Produit non trouvé | F M Services";
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
        <p className="text-gray-600 mb-6">Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
        <a 
          href="/products" 
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium"
        >
          Retour aux produits
        </a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="py-12 bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <ProductDetails product={product} />
      </div>
    </motion.div>
  );
};

export default ProductDetail;