import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaWhatsapp, FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';
import { SiBitcoin, SiEthereum } from 'react-icons/si';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';

const VerificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [verification, setVerification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const fetchVerification = async () => {
      try {
        const docRef = doc(db, 'cryptoVerifications', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setVerification({
            id: docSnap.id,
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || '',
            cryptoType: data.cryptoType || 'bitcoin',
            walletAddress: data.walletAddress || '',
            verificationType: data.verificationType || 'basic',
            status: data.status || 'pending',
            notes: data.notes || '',
            createdAt: data.createdAt?.toDate() || new Date(),
            updatedAt: data.updatedAt?.toDate() || null,
            ...data
          });
          setNotes(data.notes || '');
        } else {
          navigate('/admin/verifications');
        }
      } catch (error) {
        console.error("Erreur lors du chargement de la vérification:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchVerification();
  }, [id, navigate]);

  const handleStatusChange = async (newStatus) => {
    try {
      await updateDoc(doc(db, 'cryptoVerifications', id), {
        status: newStatus,
        notes,
        updatedAt: new Date()
      });
      setVerification(prev => ({ ...prev, status: newStatus, notes }));
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
    }
  };

  const getCryptoIcon = () => {
    switch(verification?.cryptoType) {
      case 'bitcoin': return <SiBitcoin className="text-orange-500 text-2xl" />;
      case 'ethereum': return <SiEthereum className="text-purple-500 text-2xl" />;
      default: return <span className="text-gray-500 text-2xl">💰</span>;
    }
  };

  const getStatusBadge = () => {
    switch(verification?.status) {
      case 'completed':
        return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
          <FaCheckCircle /> Complétée
        </span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
          <FaTimesCircle /> Rejetée
        </span>;
      default:
        return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
          <FaClock /> En attente
        </span>;
    }
  };

  if (loading) return <div className="p-6">Chargement...</div>;
  if (!verification) return <div className="p-6">Demande non trouvée</div>;

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/admin/verifications')} 
          className="mr-4 text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <h1 className="text-2xl font-bold">Détail de la vérification</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Informations client */}
          <div className="md:col-span-2 space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Informations Client</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Nom complet</h3>
                  <p className="mt-1 text-sm text-gray-900">{verification.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1 text-sm text-gray-900">{verification.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Téléphone</h3>
                  <p className="mt-1 text-sm text-gray-900">{verification.phone}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date de demande</h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {verification.createdAt.toLocaleDateString()} à {verification.createdAt.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Détails vérification */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Détails de la Vérification</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Type de crypto</h3>
                  <div className="mt-1 flex items-center gap-2">
                    {getCryptoIcon()}
                    <span className="text-sm text-gray-900 capitalize">
                      {verification.cryptoType === 'bitcoin' ? 'Bitcoin' : 
                       verification.cryptoType === 'ethereum' ? 'Ethereum' : 
                       verification.cryptoType}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Type de vérification</h3>
                  <p className="mt-1 text-sm text-gray-900 capitalize">{verification.verificationType}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-gray-500">Adresse </h3>
                  <p className="mt-1 text-sm text-gray-900 font-mono bg-gray-100 p-2 rounded">
                    {verification.walletAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Notes</h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                rows="4"
                placeholder="Ajoutez des notes sur cette vérification..."
              ></textarea>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Statut</h2>
              <div className="flex justify-between items-center mb-4">
                {getStatusBadge()}
                <a
                  href={`https://wa.me/${verification.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleStatusChange('completed')}
                  disabled={verification.status === 'completed'}
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-md ${verification.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-green-600 text-white hover:bg-green-700'}`}
                >
                  <FaCheckCircle className="mr-2" />
                  Marquer comme complétée
                </button>
                <button
                  onClick={() => handleStatusChange('rejected')}
                  disabled={verification.status === 'rejected'}
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-md ${verification.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-red-600 text-white hover:bg-red-700'}`}
                >
                  <FaTimesCircle className="mr-2" />
                  Rejeter la demande
                </button>
                {verification.status !== 'pending' && (
                  <button
                    onClick={() => handleStatusChange('pending')}
                    className="w-full flex items-center justify-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                  >
                    <FaClock className="mr-2" />
                    Remettre en attente
                  </button>
                )}
              </div>
            </div>

            {/* Historique */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Historique</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-1 mt-1">
                    <FaClock className="text-xs" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Demande créée</h3>
                    <p className="text-xs text-gray-500">
                      {verification.createdAt.toLocaleDateString()} à {verification.createdAt.toLocaleTimeString()}
                    </p>
                  </div>
                </li>
                {verification.updatedAt && (
                  <li className="flex items-start gap-3">
                    <div className="bg-purple-100 text-purple-800 rounded-full p-1 mt-1">
                      <FaCheckCircle className="text-xs" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Dernière mise à jour</h3>
                      <p className="text-xs text-gray-500">
                        {verification.updatedAt.toLocaleDateString()} à {verification.updatedAt.toLocaleTimeString()}
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationDetail;