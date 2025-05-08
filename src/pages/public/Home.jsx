import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/home/Hero';
import Features from '../../components/home/Features';
import Testimonials from '../../components/home/Testimonials';
import Stats from '../../components/home/Stats';
import ProductGrid from '../../components/products/ProductGrid';
import { products } from '../../data/products';
import { testimonials } from '../../data/testimonials';

const Home = () => {
  useEffect(() => {
    document.title = "Accueil | EliteShop";
  }, []);

  const featuredProducts = products.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      <Hero />
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Nos Produits Phares</h2>
        <ProductGrid products={featuredProducts} />
      </motion.section>
      
      <Features />
      
      <Testimonials testimonials={featuredTestimonials} />
      
      <Stats />
      
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-primary-50 py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer?</h2>
          <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de produits et services pour répondre à tous vos besoins.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/products" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Voir nos produits
            </a>
            <a 
              href="/services" 
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;