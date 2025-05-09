import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductGrid from '../../components/products/ProductGrid';
import Filters from '../../components/products/Filters';
import { products } from '../../data/products';
import SectionHeader from '../../components/home/SectionHeader';

const Products = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    document.title = "Produits | F M Services";
    window.scrollTo(0, 0);
  }, [location]);

  const handleFilter = ({ priceMin, priceMax, categories, minRating }) => {
    const filtered = products.filter(product => {
      return (
        product.price >= priceMin &&
        product.price <= priceMax &&
        (categories.length === 0 || categories.includes(product.category)) &&
        product.rating >= minRating
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
   

        <SectionHeader
  title="Nos Produits "
  subtitle="  Découvrez notre sélection exclusive de produits high-tech et accessoires premium. "
  animationDelay={0.2}
/>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-full ">
            <Filters categories={categories} onFilter={handleFilter} />
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-medium mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-600">Essayez d'ajuster vos filtres de recherche.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;