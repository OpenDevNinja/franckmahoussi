import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase';

const DeliveryOptionList = () => {
  const [options, setOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'deliveryOptions'));
        const optionsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name || '',
          description: doc.data().description || '',
          price: doc.data().price || 0,
          deliveryTime: doc.data().deliveryTime || '',
          icon: doc.data().icon || '',
          features: doc.data().features || [],
          recommended: doc.data().recommended || false,
          ...doc.data()
        }));
        setOptions(optionsData);
      } catch (error) {
        console.error("Erreur lors du chargement des options:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOptions();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette option ?')) {
      try {
        await deleteDoc(doc(db, 'deliveryOptions', id));
        setOptions(options.filter(option => option.id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };

  const filteredOptions = options.filter(option => {
    const name = option.name?.toLowerCase() || '';
    const term = searchTerm.toLowerCase();
    return name.includes(term);
  });

  if (loading) return <div className="p-6">Chargement...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Options de Livraison</h1>
        <Link
          to="/admin/delivery-options/add"
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" />
          Ajouter une option
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher des options..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Option
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Délai
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <tr key={option.id} className={option.recommended ? 'bg-blue-50' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{option.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{option.name}</div>
                          {option.recommended && (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              Recommandé
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">{option.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {option.price.toFixed(2)} €
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {option.deliveryTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to={`/admin/delivery-options/edit/${option.id}`}
                        className="text-primary-600 hover:text-primary-900 mr-4 inline-block"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(option.id)}
                        className="text-red-600 hover:text-red-900 inline-block"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                    Aucune option trouvée
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOptionList;