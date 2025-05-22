import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../firebase';

const TrendingCryptoEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    image: '',
    affiliateLink: '',
    description: ''
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchCrypto = async () => {
      const docRef = doc(db, 'trendingCryptos', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData({
          name: data.name || '',
          symbol: data.symbol || '',
          image: data.image || '',
          affiliateLink: data.affiliateLink || '',
          description: data.description || ''
        });
      } else {
        navigate('/admin/trending-cryptos');
      }
    };
    
    fetchCrypto();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const cryptoRef = doc(db, 'trendingCryptos', id);
      await updateDoc(cryptoRef, {
        ...formData,
        updatedAt: serverTimestamp()
      });

      navigate('/admin/trending-cryptos');
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la crypto:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/admin/trending-cryptos')} className="mr-4 text-gray-600 hover:text-gray-900">
          <FaArrowLeft className="text-xl" />
        </button>
        <h1 className="text-2xl font-bold">Modifier la crypto</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de la crypto
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 mb-1">
                  Symbole (ex: BTC)
                </label>
                <input
                  type="text"
                  id="symbol"
                  name="symbol"
                  value={formData.symbol}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  URL de l'image
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  placeholder="https://example.com/image.png"
                />
                {formData.image && (
                  <div className="mt-2">
                    <img src={formData.image} alt="Preview" className="h-20 object-contain rounded" />
                  </div>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="affiliateLink" className="block text-sm font-medium text-gray-700 mb-1">
                  Lien d'affiliation
                </label>
                <input
                  type="url"
                  id="affiliateLink"
                  name="affiliateLink"
                  value={formData.affiliateLink}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  placeholder="https://www.binance.com/en/register?ref=ABCD1234"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-3 flex justify-end border-t border-gray-200">
            <button
              type="submit"
              disabled={uploading}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center disabled:opacity-50"
            >
              {uploading ? 'Envoi en cours...' : (
                <>
                  <FaSave className="mr-2" />
                  Enregistrer les modifications
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrendingCryptoEdit;