import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductGrid from '../../components/products/ProductGrid';
import Filters from '../../components/products/Filters';
import { products } from '../../data/products';
import SectionHeader from '../../components/home/SectionHeader';
import Hemelt from '../../components/common/Hemelt';

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
    <div className=" bg-gray-50 min-h-screen">


       {/* helmet */}
        <Hemelt
         title="Nos Produits"
         subtitle="Découvrez notre sélection exclusive de produits high-tech et accessoires premium."
        />
      <div className="container mx-auto px-4">
  
        
        <div className="flex mt-10 flex-col lg:flex-row gap-8">
          <div className="lg:w-full ">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;