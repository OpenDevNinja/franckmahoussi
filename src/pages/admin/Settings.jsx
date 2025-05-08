import { useState } from 'react';
import { FaSave } from 'react-icons/fa';

const Settings = () => {
  const [formData, setFormData] = useState({
    siteName: 'EliteShop',
    siteEmail: 'contact@eliteshop.com',
    whatsappNumber: '+33123456789',
    maintenanceMode: false,
    currency: 'EUR',
    taxRate: 20
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous feriez normalement une requête API pour enregistrer les paramètres
    alert('Paramètres enregistrés avec succès!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Paramètres du Site</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom du site
                </label>
                <input
                  type="text"
                  id="siteName"
                  name="siteName"
                  value={formData.siteName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="siteEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Email du site
                </label>
                <input
                  type="email"
                  id="siteEmail"
                  name="siteEmail"
                  value={formData.siteEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                  Devise
                </label>
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                >
                  <option value="EUR">Euro (€)</option>
                  <option value="USD">Dollar ($)</option>
                  <option value="GBP">Livre (£)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700 mb-1">
                  Taux de TVA (%)
                </label>
                <input
                  type="number"
                  id="taxRate"
                  name="taxRate"
                  value={formData.taxRate}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="maintenanceMode"
                  name="maintenanceMode"
                  checked={formData.maintenanceMode}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-700">
                  Mode maintenance
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-3 flex justify-end border-t border-gray-200">
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <FaSave className="mr-2" />
              Enregistrer les paramètres
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;