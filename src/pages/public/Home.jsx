import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/home/Hero';
import Features from '../../components/home/Features';
import Testimonials from '../../components/home/Testimonials';
import Stats from '../../components/home/Stats';
import ProductGrid from '../../components/products/ProductGrid';
import { products } from '../../data/products';
import { testimonials } from '../../data/testimonials';
import SectionHeader from '../../components/home/SectionHeader';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = "Accueil | F M Services";
  }, []);

  const featuredProducts = products.slice(0, 8);
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
      
        <SectionHeader
  title="Nos Produits Phares"
  subtitle="Performance. Style. Innovation. Tout ce dont vous avez besoin, soigneusement sélectionné pour vous. "
  animationDelay={0.2}
/>
        <ProductGrid products={featuredProducts} />
        <div className="flex justify-center mt-8">
      <Link to="/products">
  <motion.button
    className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-light-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-heading font-semibold text-lg"
    whileHover={{ 
      scale: 1.05,
      background: "linear-gradient(to right, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
    }}
    whileTap={{ 
      scale: 0.98,
      boxShadow: "0 2px 10px -3px rgba(0, 0, 0, 0.3)"
    }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    Explorer la collection
  </motion.button>
</Link>
      </div>
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
          {/* <h2 className="text-3xl font-bold mb-6">Prêt à commencer?</h2>
          <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de produits et services pour répondre à tous vos besoins.
          </p> */}

          <SectionHeader
  title="Prêt à commencer?"
  subtitle="  Découvrez notre sélection exclusive de produits et services pour répondre à tous vos besoins. "
  animationDelay={0.2}
/>
          <div className="flex justify-center gap-4">
            <a 
              href="/products" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Voir nos produits
            </a>
            <a 
              href="/delivery" 
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