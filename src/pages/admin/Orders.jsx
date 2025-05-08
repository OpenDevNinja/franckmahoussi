import { useState } from 'react';
import { FaSearch, FaWhatsapp } from 'react-icons/fa';

// Données factices pour les commandes
const mockOrders = [
  {
    id: 1001,
    date: '2023-05-15',
    customer: 'Jean Dupont',
    items: [
      { name: 'Ordinateur Portable EliteBook', quantity: 1, price: 1299.99 },
      { name: 'Formation Crypto Débutant', quantity: 1, price: 199.99 }
    ],
    total: 1499.98,
    status: 'En attente',
    whatsapp: '+33123456789'
  },
  {
    id: 1002,
    date: '2023-05-14',
    customer: 'Marie Lambert',
    items: [
      { name: 'Smartphone ProMax', quantity: 2, price: 899.99 }
    ],
    total: 1799.98,
    status: 'Expédié',
    whatsapp: '+33123456789'
  },
  {
    id: 1003,
    date: '2023-05-13',
    customer: 'Thomas Lefevre',
    items: [
      { name: 'Formation Trading Avancé', quantity: 1, price: 499.99 },
      { name: 'Livraison Express', quantity: 1, price: 24.99 }
    ],
    total: 524.98,
    status: 'Complété',
    whatsapp: '+33123456789'
  },
  {
    id: 1004,
    date: '2023-05-12',
    customer: 'Sophie Martin',
    items: [
      { name: 'Casque Audio Premium', quantity: 1, price: 349.99 }
    ],
    total: 349.99,
    status: 'Annulé',
    whatsapp: '+33123456789'
  }
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = 
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Expédié':
        return 'bg-blue-100 text-blue-800';
      case 'Complété':
        return 'bg-green-100 text-green-800';
      case 'Annulé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gestion des Commandes</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher des commandes..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="all">Tous les statuts</option>
                <option value="En attente">En attente</option>
                <option value="Expédié">Expédié</option>
                <option value="Complété">Complété</option>
                <option value="Annulé">Annulé</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commande
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Articles
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                    <div className="text-sm text-gray-500">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      <ul className="list-disc pl-5">
                        {order.items.map((item, index) => (
                          <li key={index}>
                            {item.name} (x{item.quantity}) - {item.price}€
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {order.total}€
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href={`https://wa.me/${order.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-900"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;