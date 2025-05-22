import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase';

const TrendingCryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'trendingCryptos'));
        const cryptosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name || '',
          symbol: doc.data().symbol || '',
          image: doc.data().image || '',
          affiliateLink: doc.data().affiliateLink || '',
          description: doc.data().description || '',
          ...doc.data()
        }));
        setCryptos(cryptosData);
      } catch (error) {
        console.error("Erreur lors du chargement des cryptos:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCryptos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette crypto ?')) {
      try {
        await deleteDoc(doc(db, 'trendingCryptos', id));
        setCryptos(cryptos.filter(crypto => crypto.id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };

  const filteredCryptos = cryptos.filter(crypto => {
    const name = crypto.name?.toLowerCase() || '';
    const symbol = crypto.symbol?.toLowerCase() || '';
    const term = searchTerm.toLowerCase();
    
    return name.includes(term) || symbol.includes(term);
  });

  if (loading) return <div className="p-6">Chargement...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Cryptos Tendances</h1>
        <Link
          to="/admin/trending-cryptos/add"
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" />
          Ajouter une crypto
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
              placeholder="Rechercher des cryptos..."
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
                  Crypto
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Symbole
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lien d'affiliation
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCryptos.length > 0 ? (
                filteredCryptos.map((crypto) => (
                  <tr key={crypto.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {crypto.image ? (
                            <img 
                              className="h-10 w-10 rounded-full object-cover" 
                              src={crypto.image} 
                              alt={crypto.name} 
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500 text-xs">Aucune image</span>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{crypto.name}</div>
                          <div className="text-sm text-gray-500 line-clamp-1">{crypto.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {crypto.symbol}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a 
                        href={crypto.affiliateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline"
                      >
                        Lien affilié
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to={`/admin/trending-cryptos/edit/${crypto.id}`}
                        className="text-primary-600 hover:text-primary-900 mr-4 inline-block"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(crypto.id)}
                        className="text-red-600 hover:text-red-900 inline-block"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                    Aucune crypto trouvée
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

export default TrendingCryptoList;