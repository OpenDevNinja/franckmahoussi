import { useEffect } from 'react';
import { FaBox, FaUsers, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import { products } from '../../data/products';
import { services } from '../../data/services';
import { testimonials } from '../../data/testimonials';

const Dashboard = () => {
  useEffect(() => {
    document.title = "Tableau de bord | Admin F M Services";
  }, []);

  const stats = [
    { title: "Produits", value: products.length, icon: <FaBox className="text-2xl" />, color: "bg-primary-100 text-primary-600" },
    { title: "Services", value: services.length, icon: <FaShoppingCart className="text-2xl" />, color: "bg-secondary-100 text-secondary-600" },
    { title: "Clients", value: 1245, icon: <FaUsers className="text-2xl" />, color: "bg-accent-100 text-accent-600" },
    { title: "Revenus", value: "24,599€", icon: <FaChartLine className="text-2xl" />, color: "bg-purple-100 text-purple-600" },
  ];

  const recentProducts = [...products].slice(0, 5);
  const recentTestimonials = [...testimonials].slice(0, 3);

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Products */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Produits récents</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentProducts.map(product => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={product.image} alt={product.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.price}€</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {product.rating}/5
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recent Testimonials */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Témoignages récents</h2>
          </div>
          <div className="p-6 space-y-4">
            {recentTestimonials.map(testimonial => (
              <div key={testimonial.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <div className="flex items-start">
                  <img className="h-10 w-10 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h4 className="text-sm font-medium">{testimonial.name}</h4>
                      <span className="ml-2 text-xs text-gray-500">{testimonial.role}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{testimonial.content}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Actions rapides</h2>
          </div>
          <div className="p-6 grid grid-cols-1 gap-4">
            <a 
              href="/admin/products/add" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <FaBox className="mr-2" />
              Ajouter un produit
            </a>
            <a 
              href="/admin/services/add" 
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <FaShoppingCart className="mr-2" />
              Ajouter un service
            </a>
            <a 
              href="/admin/orders" 
              className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <FaChartLine className="mr-2" />
              Voir les commandes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;