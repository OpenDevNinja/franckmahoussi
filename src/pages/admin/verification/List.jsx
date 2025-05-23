import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaWhatsapp, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { SiBitcoin, SiEthereum } from 'react-icons/si';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';

const VerificationList = () => {
  const [verifications, setVerifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchVerifications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cryptoVerifications'));
        const verificationsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name || '',
          email: doc.data().email || '',
          phone: doc.data().phone || '',
          cryptoType: doc.data().cryptoType || 'bitcoin',
          walletAddress: doc.data().walletAddress || '',
          verificationType: doc.data().verificationType || 'basic',
          status: doc.data().status || 'pending',
          createdAt: doc.data().createdAt?.toDate() || new Date(),
          ...doc.data()
        }));
        setVerifications(verificationsData);
      } catch (error) {
        console.error("Erreur lors du chargement des vérifications:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchVerifications();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'cryptoVerifications', id), {
        status: newStatus,
        updatedAt: new Date()
      });
      setVerifications(verifications.map(verif => 
        verif.id === id ? {...verif, status: newStatus} : verif
      ));
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
    }
  };

  const filteredVerifications = verifications.filter(verification => {
    const matchesSearch = 
      verification.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verification.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      verification.phone.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' || verification.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getCryptoIcon = (type) => {
    switch(type) {
      case 'bitcoin': return <SiBitcoin className="text-orange-500" />;
      case 'ethereum': return <SiEthereum className="text-purple-500" />;
      default: return <span className="text-gray-500">💰</span>;
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center gap-1">
          <FaCheckCircle /> Complétée
        </span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs flex items-center gap-1">
          <FaTimesCircle /> Rejetée
        </span>;
      default:
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs flex items-center gap-1">
          <FaClock /> En attente
        </span>;
    }
  };

  if (loading) return <div className="p-6">Chargement...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Vérifications Crypto</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher des demandes..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="block w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          >
            <option value="all">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="completed">Complétée</option>
            <option value="rejected">Rejetée</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Crypto
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
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
              {filteredVerifications.length > 0 ? (
                filteredVerifications.map((verification) => (
                  <tr key={verification.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{verification.name}</div>
                      <div className="text-sm text-gray-500">{new Date(verification.createdAt).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getCryptoIcon(verification.cryptoType)}
                        <span className="text-sm text-gray-900 capitalize">
                          {verification.cryptoType === 'bitcoin' ? 'Bitcoin' : 
                           verification.cryptoType === 'ethereum' ? 'Ethereum' : 
                           verification.cryptoType}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                      {verification.verificationType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{verification.email}</div>
                      <div className="text-sm text-gray-500">{verification.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(verification.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                      <a
                        href={`https://wa.me/${verification.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-900 inline-block"
                      >
                        <FaWhatsapp className="text-xl" />
                      </a>
                      {verification.status !== 'completed' && (
                        <button
                          onClick={() => handleStatusChange(verification.id, 'completed')}
                          className="text-primary-600 hover:text-primary-900 inline-block"
                        >
                          <FaCheckCircle className="text-xl" />
                        </button>
                      )}
                      {verification.status !== 'rejected' && (
                        <button
                          onClick={() => handleStatusChange(verification.id, 'rejected')}
                          className="text-red-600 hover:text-red-900 inline-block"
                        >
                          <FaTimesCircle className="text-xl" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    Aucune demande trouvée
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

export default VerificationList;